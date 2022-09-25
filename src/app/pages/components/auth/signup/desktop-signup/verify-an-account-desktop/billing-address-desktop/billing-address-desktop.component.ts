import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../../../../../../../core';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { Pattern } from 'src/app/shared/regex.pattern';
import * as moment from 'moment';

@Component({
  selector: 'billing-address-desktop',
  templateUrl: './billing-address-desktop.component.html',
  styleUrls: ['./billing-address-desktop.component.scss']
})
export class BillingAddressDesktopComponent implements OnInit {

  billingInfoForm: FormGroup;
  billingAddressId;
  @Output() selectStep = new EventEmitter<number>();
  @Output() addressType = new EventEmitter<string>();
  isBillingAdded = window.localStorage.getItem('billingUploaded');
  today = new Date().getDate();
  submitted: boolean = false;
  isSame: boolean = false;
  preview = '';
  selectedFile: File = null;
  fd = new FormData();


  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public signupData: TempSignupDataService
  ) { }

  ngOnInit() {
    this.selectedFile = this.signupData.billingAddressPic.file;
    this.preview = this.signupData.billingAddressPic.preview;
    this.createForm();
    this.checkDataExist();
  }

  onFileUpload(event) {
    this.selectedFile = event.files[event.files.length - 1];
    this.preview = event.preview[event.preview.length - 1];
    this.signupData.billingAddressPic.file = this.selectedFile;
    this.signupData.billingAddressPic.preview = this.preview;
    this.billingInfoForm.controls['billing_address_pic'].setErrors(null);
  }

  removeImage() {
    this.selectedFile = null;
    this.preview = '';
    this.signupData.billingAddressPic.preview = '';
    this.signupData.billingAddressPic.file = null;
  }

  checkDataExist() {
    let data = this.signupData.getBillingAddress();

    if(data){
      console.log("data >", data);

      this.billingInfoForm.patchValue({
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

      this.billingAddressId = this.signupData.getBillingAddressId();
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
  
        this.billingInfoForm.patchValue({
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
        this.billingInfoForm.disable();
      }
      else {
        console.log('no data');
      }
    } else {
      this.billingInfoForm.enable();

    }    
  }

  createForm() {
    this.billingInfoForm = this.fb.group({
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
      billing_address_pic: ['']
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
    this.addressType.emit('billing');
  }

  proceed() {
    if (this.selectedFile && this.preview) {
      this.billingInfoForm.controls['billing_address_pic'].setErrors(null);
    } else {
      this.billingInfoForm.controls['billing_address_pic'].setErrors({'imageRequired': true});
      this.submitted = false;
      return;
    }
    console.log('billingInfoForm Valid ?', this.billingInfoForm.valid);

    this.submitted = true;
    
    // changing form state if formValidation is valid 
    if (this.billingInfoForm.valid || this.billingInfoForm.disabled) {
      if (this.isSame) {
        const fd = new FormData();
        fd.append('billing_address_pic', this.selectedFile);
        fd.append('user_id', this.userService.getTempRegisteredUser().id);
        fd.append('use_same', 'true');

        if (this.submitted && this.billingAddressId) {
          this.userService.updateBillingAddress(this.billingAddressId, fd).subscribe(res => {
            this.selectStep.emit(3);

            this.billingAddressId = res['id'];
            this.signupData.setBillingAddressId(this.billingAddressId);
            this.signupData.setBillingAddress(this.billingInfoForm.value);
          });
        } else {
          this.userService.setBillingAddress(fd).subscribe(res => {
            this.selectStep.emit(3);
            window.localStorage.setItem('billingUploaded', 'true');

            this.submitted = true;
            // this.toasterService.success('Billing address saved successfully');
            console.log(res);
            this.billingAddressId = res['id'];
            this.signupData.setBillingAddress(this.billingInfoForm.value);
            
            this.signupData.setBillingAddressId(this.billingAddressId);
            localStorage.setItem('billingUploaded', 'true');
          });
        }
      } else {
        let billingAddressInfo = Object.assign({}, this.billingInfoForm.value);
        billingAddressInfo.user_id = this.userService.getTempRegisteredUser().id;
        for ( var key in billingAddressInfo ) {
          this.fd.append(key, billingAddressInfo[key]);
      }
      this.fd.append('billing_address_pic', this.selectedFile);
        if (this.billingAddressId) {
          this.userService.updateBillingAddress(this.billingAddressId, this.fd).subscribe(res => {
            this.submitted = true;
            this.billingAddressId = res['id'];
            this.signupData.setBillingAddressId(this.billingAddressId);
            this.onSelectStep();
          })
        } else {
          
          this.userService.setBillingAddress(this.fd).subscribe(res => {
            this.submitted = true;
            console.log(res);
            // this.submitted = false;
            this.billingAddressId = res['id'];
            this.signupData.setBillingAddressId(this.billingAddressId);
            window.localStorage.setItem('billingUploaded', 'true');
            this.onSelectStep();
            // this.billingInfoForm.reset();
          }, err => {
            console.log(err);
          });
        }
        
      }
      }
    }
  }

