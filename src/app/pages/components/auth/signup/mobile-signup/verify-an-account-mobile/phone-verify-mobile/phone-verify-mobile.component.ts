import { Component, OnInit } from '@angular/core';
import { PhoneVerifyComponent } from '../../../desktop-signup/verify-an-account-desktop/phone-verify/phone-verify.component';
import { FormBuilder } from '@angular/forms';
import { UserService, ApiService } from 'src/app/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';

@Component({
  selector: 'app-phone-verify-mobile',
  templateUrl: './phone-verify-mobile.component.html',
  styleUrls: ['./phone-verify-mobile.component.scss']
})
export class PhoneVerifyMobileComponent extends PhoneVerifyComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public toast: ToastrService,
    public router: Router,
    public userService: UserService,
    public signupData: TempSignupDataService
  ) { 
    super(formBuilder, apiService, toast, router, userService, signupData);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
