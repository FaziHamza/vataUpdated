import { Component, Inject, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/core';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { Pattern } from 'src/app/shared/regex.pattern';
import { AuthorizedModalComponent } from './authorized-modal/authorized-modal.component';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'business-info-desktop',
  templateUrl: './business-info-desktop.component.html',
  styleUrls: ['./business-info-desktop.component.scss']
})
export class BusinessInfoDesktopComponent implements OnInit {

  businessInfoForm: FormGroup;
  privateInfoForm: FormGroup;
  signupDeps;
  sellerOptions;
  serviceOptions;
  businessTypeOption;
  preview = '';
  selectedFile: File = null;
  fd = new FormData();
  
  @Output() selectStep = new EventEmitter<number>();

  step: number = 3;
  type: string = 'private';
  submitted: boolean = false;
  authSigners = [];
  constructor(
    private fb: FormBuilder,
    public signupData: TempSignupDataService,
    private dialog: MatDialog,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.preview = this.signupData.coverPic.preview;
    this.selectedFile = this.signupData.coverPic.file;
    this.userService.getSignupDeps().subscribe(res => {
      console.log(res);
      this.signupDeps = res;
      if(res['business_field'].length){
        this.sellerOptions = res['business_field'][0]['seller']['dept'];
        this.serviceOptions = res['business_field'][1]['service']['dept'];
      }
      console.log(this.serviceOptions);
      
      this.businessTypeOption = res['bussiness_type'];
    });
    this.createForm();
    // this.checkDataExist();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthorizedModalComponent, {
      width: '35%',
      data: { name: 'sample' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.authSigners.push(result);
      }
    });
  }

  remove(i) {
    this.authSigners.splice(i, 1);
  }

  onFileUpload(event) {
    this.selectedFile = event.files[event.files.length - 1];
    this.preview = event.preview[event.preview.length - 1];
    this.signupData.coverPic.preview = this.preview;
    this.signupData.coverPic.file = this.selectedFile;
    if (this.selectedFile && this.preview) {
      this.businessInfoForm.controls['cover_pic'].setErrors(null);
    }
  }

  removeImage() {
    this.signupData.coverPic.preview = '';
    this.signupData.coverPic.file = null;
    this.selectedFile = null;
    this.preview = '';
  }

  checkDataExist() {
    let privateData = this.signupData.getPrivateInfo();
    let businessData = this.signupData.getBusinessInfo();

    if(privateData && !businessData){
      console.log("privateData >", privateData);

      // type selected
      this.type = 'private';

      this.privateInfoForm.patchValue({
        street: privateData.street,
        street_num: privateData.street_num,
        city: privateData.city,
        postcode: privateData.postcode,
        country: privateData.country,
        phone_isd: privateData.phone_isd,
        phone_number: privateData.phone_number
      });

      // activate the input label as focused to mark MDB label to top
      // this.signupData.activateMDBinput();
    }

    else if(privateData && businessData) {
      // type selected
      this.type = 'business';

      this.privateInfoForm.patchValue({
        street: privateData.street,
        street_num: privateData.street_num,
        city: privateData.city,
        postcode: privateData.postcode,
        country: privateData.country,
        phone_isd: privateData.phone_isd,
        phone_number: privateData.phone_number,
        is_business: false
      });

      this.businessInfoForm.patchValue({
        business_type: businessData.business_type,
        business_field: businessData.business_field,
        department_industry: businessData.department_industry,
        store_name: businessData.store_name,
        registered: businessData.registered,
        registered_code: businessData.registered_code,
        VAT_liable: businessData.VAT_liable,
        cover_pic: businessData.cover_pic,
        payout_interval: businessData.payout_interval,
        is_business: true
      });

      // activate the input label as focused to mark MDB label to top
      // this.signupData.activateMDBinput();
    }
  }

  createForm() {
    this.businessInfoForm = this.fb.group({
      business_type: ['', Validators.required],
      business_field: ['', Validators.required],
      department_industry: ['', Validators.required],
      store_name: ['', Validators.required],
      registered: [''],
      registered_code: [0],
      VAT_liable: [''],
      VAT_liable_code: [0],
      authorized: [false],
      cover_pic: [''],
      payout_interval: ['30'],
      is_business: true
    });

    this.privateInfoForm = this.fb.group({
      street: ['', Validators.required],
      street_num: ['', [Validators.required, Validators.pattern(Pattern.numericRegex)]],
      city: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(Pattern.numericRegex)]],
      country: ['', Validators.required],
      phone_isd: ['+41', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern(Pattern.numericRegex),  Validators.minLength(9), Validators.maxLength(9)]],
    });
  }

  onSelectStep() {
    this.selectStep.emit(this.step);
  }

  changeFormType(type) {
    this.type = type;
  }

  proceed() {
    
    
    this.businessInfoForm.value.authorized_signer = this.authSigners;
    this.businessInfoForm.value.cover_pic = this.selectedFile;
    this.submitted = true;
    
    // changing form state if formValidation is valid 
    if (this.type == 'private' && this.privateInfoForm.valid) {
      let signupdata = { ...this.signupData.getUserInfo(), ...this.privateInfoForm.value };
      const registeredUser = this.userService.getTempRegisteredUser();
      if (registeredUser && registeredUser.id) {
        
        this.modifyUser(signupdata, registeredUser.id, 'private');
      } else {
        this.userService.userRegister(signupdata).subscribe((response) => {
          console.log(response);
          window.localStorage.setItem('tempRegisteredUser', JSON.stringify(response));
          window.localStorage.setItem('isPrivateRegistered', 'true');
          this.userService.sendVerifyEmail({email: response.email, base_url: environment.FRONT_END_URL}).subscribe(res => {
            console.log(res);
            this.onSelectStep();
            this.signupData.removeBusinessInfo();
            this.submitted = false;
          }, err => {
            this.submitted = false;
          });
        },
        (error) => {
          console.log(error);
          this.toastrService.error(error.details, 'Error')
        });
      } 

      this.signupData.setPrivateInfo(this.privateInfoForm.value);
      
    }
    else if (this.type == 'business' && this.businessInfoForm.valid && this.privateInfoForm.valid) {
      if (this.selectedFile && this.preview) {
        this.businessInfoForm.controls['cover_pic'].setErrors(null);
      } else {
        this.businessInfoForm.controls['cover_pic'].setErrors({'imageRequired': true});
        this.businessInfoForm.markAllAsTouched();
        this.submitted = false;
        return;
      }
      let signupdata = { ...this.signupData.getUserInfo(), ...this.privateInfoForm.value, ...this.businessInfoForm.value };
      const registeredUser = this.userService.getTempRegisteredUser();
      for ( var key in signupdata ) {
        this.fd.append(key, signupdata[key]);
        if (key === 'authorized_signer' && Array.isArray(signupdata[key]) && !signupdata[key].length) {
          this.fd.append(key, '[]')
        }
      }
      if (registeredUser && registeredUser.id) {
        this.modifyUser(signupdata, registeredUser.id, 'business');
      } else {
        this.userService.userRegister(this.fd).subscribe((response) => {
          console.log(response);
          this.userService.sendVerifyEmail({email: response.email, base_url: environment.FRONT_END_URL}).subscribe(res => {
            console.log(res);
            this.onSelectStep();
            this.submitted = false;
          }, err => {
            this.submitted = false;
          });
          window.localStorage.setItem('isBusinessRegistered', 'true');
          window.localStorage.removeItem('isPrivateRegistered');
          window.localStorage.setItem('tempRegisteredUser', JSON.stringify(response));
        },
        (error) => {
          console.log(error);
          this.toastrService.error(error.details, 'Error')
        });
      }

      // storing data in a service 
      this.signupData.setPrivateInfo(this.privateInfoForm.value);
      this.signupData.setBusinessInfo(this.businessInfoForm.value);
      
    }
    else {
      console.log('Selected Type Form Validation Required.');
    }
  }

  modifyUser(data, id, type) {
    const formData = new FormData();
    for ( var key in data ) {
        formData.append(key, data[key]);
        if (key === 'authorized_signer' && Array.isArray(data[key]) && !data[key].length) {
          formData.append(key, '[]')
        }
        if (key === 'cover_pic' && data[key] === null) {
          formData.delete(key);
        }
      }
    this.userService.modifyUser(formData, id).subscribe((response) => {
      if (type === 'business') {
        window.localStorage.setItem('isBusinessRegistered', 'true');
        window.localStorage.removeItem('isPrivateRegistered');
      } else if (type === 'private') {
        window.localStorage.setItem('isPrivateRegistered', 'true');
        window.localStorage.removeItem('isBusinessRegistered');
      }
      window.localStorage.setItem('tempRegisteredUser', JSON.stringify(response));
      this.onSelectStep();
    },
    (error) => {
      console.log(error);
      this.toastrService.error(error.details ? error.details : error.detail, 'Error')
    })
  }

}
