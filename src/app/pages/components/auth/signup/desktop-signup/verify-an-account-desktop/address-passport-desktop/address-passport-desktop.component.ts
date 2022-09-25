import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService, TempSignupDataService } from 'src/app/core';
import * as moment from 'moment';
import { Pattern } from 'src/app/shared/regex.pattern';

@Component({
  selector: 'address-passport-desktop',
  templateUrl: './address-passport-desktop.component.html',
  styleUrls: ['./address-passport-desktop.component.scss']
})
export class AddressPassportDesktopComponent implements OnInit {

  passportInfoForm: FormGroup;
  passportAddressId;
  @Output() selectStep = new EventEmitter<number>();
  @Output() addressType = new EventEmitter<string>();

  today = new Date().getDate();
  step: number = 5;
  submitted: boolean = false;
  isSame: boolean = false;
  preview = '';
  isPassportAdded = window.localStorage.getItem('passportUploaded');
  selectedFile: File = null;
  fd = new FormData();


  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public signupData: TempSignupDataService
  ) { }

  ngOnInit() {
    this.preview = this.signupData.passportAddressPic.preview;
    this.selectedFile = this.signupData.passportAddressPic.file;
    this.createForm();
    this.checkDataExist();
  }

  onFileUpload(event) {
    this.selectedFile = event.files[event.files.length - 1];
    this.preview = event.preview[event.preview.length - 1];
    this.signupData.passportAddressPic.file = this.selectedFile;
    this.signupData.passportAddressPic.preview = this.preview;

    this.passportInfoForm.controls['passport_address_pic'].setErrors(null);
  }

  removeImage() {
    this.selectedFile = null;
    this.preview = '';
    this.signupData.passportAddressPic.preview = '';
    this.signupData.passportAddressPic.file = null;
  }

  checkDataExist() {
    let data = this.signupData.getPassportAddress();

    if(data){
      console.log("data >", data);

      this.passportInfoForm.patchValue({
        first_name: data.first_name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        username: data.username,
        street: data.street,
        street_num: data.street_num,
        city: data.city,
        postcode: data.postcode,
        country: data.country,
        phone_isd: data.phone_isd,
        phone_number: data.phone_number,
      });

      this.passportAddressId = this.signupData.getPassportAddressId();
      // activate the input label as focused to mark MDB label to top
      // this.signupData.activateMDBinput();
    }
    else {
      console.log('no data');
    }
  }

  // getting data from userInfo and privateInfo if marked useSame toggle
  markAsSame(event) {
    this.isSame = event.checked;
    if (event.checked) {
      let userInfoData = this.signupData.getUserInfo();
      let privateInfoData = this.signupData.getPrivateInfo();
  
      if(userInfoData && privateInfoData){
        console.log("userInfoData >", userInfoData);
        console.log("privateInfoData >", privateInfoData);
  
        this.passportInfoForm.patchValue({
          first_name: userInfoData.first_name,
          last_name: userInfoData.last_name,
          birth_date: userInfoData.birth_date,
          username: userInfoData.username,
          street: privateInfoData.street,
          street_num: privateInfoData.street_num,
          city: privateInfoData.city,
          postcode: privateInfoData.postcode,
          country: privateInfoData.country,
          phone_isd: privateInfoData.phone_isd || userInfoData.phone_isd,
          phone_number: privateInfoData.phone_number || userInfoData.phone_number,
        });
        this.passportInfoForm.disable();
      }
      else {
        console.log('no data');
      }
    } else {
      this.passportInfoForm.enable();

    }    
  }

  createForm() {
    this.passportInfoForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', [Validators.required]],
      birth_date: ['', [Validators.required, this.minimumAge(13)]],
      username: ['', [Validators.required]],
      street: ['', [Validators.required]],
      street_num: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone_isd: ['+41', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern(Pattern.numericRegex),  Validators.minLength(9), Validators.maxLength(9)]],
      passport_address_pic: ['']
    });
  }

  minimumAge(age): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value) {
      // carefull, moment months range is from 0 to 11
      let value: any =  moment(control.value).format('YYYY-MM-DD').split('-');
      value = {
        year: value[0],
        month: value[1],
        day: value[2]
      }
      const date = moment({ year: +value.year, month: (+value.month) - 1, day: +value.day }).startOf('day');
      if (date.isValid()) {
        // https://momentjs.com/docs/#/displaying/difference/
        const now = moment().startOf('day');
        const yearsDiff = date.diff(now, 'years');
        if (yearsDiff > -age) {
          return { 'ageInvalid': true }
        }
      }
    }
    return null;
  };
}

  onSelectStep() {
    this.selectStep.emit(3);
    this.addressType.emit('passport');
  }

  proceed() {
    if (this.selectedFile && this.preview) {
      this.passportInfoForm.controls['passport_address_pic'].setErrors(null);
    } else {
      this.passportInfoForm.controls['passport_address_pic'].setErrors({'imageRequired': true});
      this.submitted = false;
      return;
    }
    console.log('billingInfoForm Valid ?', this.passportInfoForm.valid);

    this.submitted = true;
    
    // changing form state if formValidation is valid 
    if (this.passportInfoForm.valid || this.passportInfoForm.disabled) {
      this.signupData.setPassportAddress(this.passportInfoForm.value);
      if (this.isSame) {
        const fd = new FormData();
        fd.append('passport_address_pic', this.selectedFile);
        fd.append('user_id', this.userService.getTempRegisteredUser().id);
        fd.append('use_same', 'true');

        if (this.submitted && this.passportAddressId) {
          this.userService.updatePassportAddress(this.passportAddressId, fd).subscribe(res => {
            this.selectStep.emit(3);

            this.passportAddressId = res['id'];
            this.signupData.setPassportAddressId(this.passportAddressId);
            this.signupData.setPassportAddress(this.passportInfoForm.value);

          });
        } else {
          this.userService.setPassportAddress(fd).subscribe(res => {
            window.localStorage.setItem('passportUploaded', 'true');

            this.submitted = true;
            // this.toasterService.success('Billing address saved successfully');
            console.log(res);
            this.selectStep.emit(3);

            this.passportAddressId = res['id'];
            this.signupData.setPassportAddressId(this.passportAddressId);
            this.signupData.setPassportAddress(this.passportInfoForm.value);

          });
        }
      } else {
        let billingAddressInfo = Object.assign({}, this.passportInfoForm.value);
        billingAddressInfo.user_id = this.userService.getTempRegisteredUser().id;
        for ( var key in billingAddressInfo ) {
          this.fd.append(key, billingAddressInfo[key]);
      }
      this.fd.append('passport_address_pic', this.selectedFile);
        if (this.passportAddressId) {
          this.userService.updatePassportAddress(this.passportAddressId, this.fd).subscribe(res => {
            this.submitted = true;
            this.passportAddressId = res['id'];
            this.signupData.setPassportAddressId(this.passportAddressId);
            this.onSelectStep();
          })
        } else {
          
          this.userService.setPassportAddress(this.fd).subscribe(res => {
            this.submitted = true;
            console.log(res);
            // this.submitted = false;
            this.passportAddressId = res['id'];
            this.signupData.setPassportAddressId(this.passportAddressId);
            window.localStorage.setItem('passportUploaded', 'true');
            this.selectStep.emit(3);
            // this.billingInfoForm.reset();
          }, err => {
            console.log(err);
          });
        }
        
      }
      }
    }
  }
