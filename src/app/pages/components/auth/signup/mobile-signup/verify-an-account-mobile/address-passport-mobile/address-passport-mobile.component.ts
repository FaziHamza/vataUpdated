import { Component, OnInit } from '@angular/core';
import { AddressPassportDesktopComponent } from '../../../desktop-signup/verify-an-account-desktop/address-passport-desktop/address-passport-desktop.component';
import { FormBuilder } from '@angular/forms';
import { UserService, TempSignupDataService } from 'src/app/core';

@Component({
  selector: 'address-passport-mobile',
  templateUrl: './address-passport-mobile.component.html',
  styleUrls: ['./address-passport-mobile.component.scss']
})
export class AddressPassportMobileComponent extends AddressPassportDesktopComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    userService: UserService,
    signupData: TempSignupDataService
  ) {
    super(fb, userService, signupData);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
