import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Pattern } from 'src/app/shared/regex.pattern';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService, ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';

@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html',
  styleUrls: ['./phone-verify.component.scss']
})
export class PhoneVerifyComponent implements OnInit {
  @Output() selectStep = new EventEmitter<number>();
  showView: boolean = false;
  isVerified: boolean = false;
  isVerifyClicked: boolean = false;
  failedToVerify: boolean = false;

  submitted: boolean = false;
  form: FormGroup;
  isPhoneVerified = window.localStorage.getItem('phoneVerified');
  isPrivate = window.localStorage.getItem('isPrivateRegistered');
  msidentification: string;
  otp;
  otpError: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public toast: ToastrService,
    public router: Router,
    public userService: UserService,
    public signupData: TempSignupDataService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public get f() { return this.form.controls; }

  toggleView() {
    this.showView = !this.showView;
  }

  verifyClicked() {
    this.isVerifyClicked = true;
  }

  initForm() {
    this.form = this.formBuilder.group({
      isd: ['41', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  public requestCode() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.submitted = false;

    // var formData = new FormData();
    // formData.append('phone_number', this.form.value.isd + this.form.value.phone);

    var phoneObj = {
      phone_number: Number(this.form.value.isd + this.form.value.phone)
    }
    // this.form.controls.phone.disable();
    // this.form.controls.isd.disable();
    // this.msidentification = "123";
    const userId = this.userService.getTempRegisteredUser().id;
    this.verifyClicked();
    this.apiService.post(ApiEndPoints.USER.ADD_PHONE, phoneObj).subscribe(
      (res: any) => {
        this.form.controls.phone.disable();
        this.form.controls.isd.disable();
        // this.form.controls.code.setValidators([Validators.required]);
        this.msidentification = res.request_id;
      },
      (err) => {
        this.failedToVerify = true;
        if (err.request_id) {
          this.msidentification = err.request_id;
          this.toast.clear();
          this.toast.error('Please use recently sent otp. New otp not generated.');
        } else {
          this.toast.clear();
          this.toast.error('Phone number cannot be verified');
        }
        
        // TODO
        console.log(err);
      }
    );
  }

  public verify() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.otp && this.otp.length == 4) {
      this.otpError = false;
      var formData = new FormData();
      formData.append('code', this.otp);
      formData.append('id', this.msidentification);
      formData.append('user_id', this.userService.getTempRegisteredUser().id);

  
      this.apiService.post(ApiEndPoints.USER.VERIFY_PHONE, formData).subscribe(
        (res: any) => {
          this.form.controls['isd'].disable();
          this.isVerified = true;
          this.toast.success('Phone is verified successfully');
          this.userService.isPhoneVerified = true;
          this.isPhoneVerified = 'true';
          window.localStorage.setItem('phoneVerified', 'true');
        },
        (err) => {
          this.toast.clear();
          this.toast.error('Failed to verify your account');
          this.failedToVerify = true;
          this.isPhoneVerified = null;
          window.localStorage.removeItem('phoneVerified');
          //TODO
          console.log(err);
        }
      );
    } else {
      this.toast.error('OTP must be 4 digits long');
      this.otpError = true;
    }
    

  }

  onSelectStep() {
    this.showView = true;
  }

  public reset() {
    this.failedToVerify = false;
    this.isVerifyClicked = false;
    this.isVerified = false;
    this.form.controls['isd'].enable();
    this.form.controls['phone'].enable();
    this.otp = null;
    this.form.controls.isd.setValue('91');
    this.form.controls.phone.setValue('');
  }

  public finish() {
    if (this.isVerified || this.userService.isPhoneVerified) {
      this.selectStep.emit(5);
    }
  }

  onOtpChange(value) {
    this.otp = value;
  }
  
  useSamePhone(event) {
    if (event.checked) {
      const privateData = this.signupData.getPrivateInfo();
      this.form.controls.isd.setValue(privateData.phone_isd);
      this.form.controls.phone.setValue(privateData.phone_number);
    } else {
      this.form.controls.isd.setValue('');
      this.form.controls.phone.setValue('');
    }
    
  }

}
