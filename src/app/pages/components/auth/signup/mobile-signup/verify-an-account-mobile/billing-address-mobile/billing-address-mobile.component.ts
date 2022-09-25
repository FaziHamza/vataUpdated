import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { BillingAddressDesktopComponent } from '../../../desktop-signup/verify-an-account-desktop/billing-address-desktop/billing-address-desktop.component';
import { UserService } from 'src/app/core';


@Component({
  selector: 'billing-address-mobile',
  templateUrl: './billing-address-mobile.component.html',
  styleUrls: ['./billing-address-mobile.component.scss']
})
export class BillingAddressMobileComponent extends BillingAddressDesktopComponent implements OnInit {

  constructor(fb: FormBuilder, userService: UserService, signupData: TempSignupDataService) {
    super(fb, userService, signupData);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
