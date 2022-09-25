import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { ChoosePlanDesktopComponent } from '../../../desktop-signup/verify-an-account-desktop/choose-plan-desktop/choose-plan-desktop.component';
import { UserService } from 'src/app/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'choose-plan-mobile',
  templateUrl: './choose-plan-mobile.component.html',
  styleUrls: ['./choose-plan-mobile.component.scss']
})
export class ChoosePlanMobileComponent extends ChoosePlanDesktopComponent implements OnInit {
  config = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
  ngOnInit() {
    super.ngOnInit();
  }

  constructor(
    userService: UserService,
    router: Router,
    fb: FormBuilder,
    toastr: ToastrService
  ) {
    super(userService, router, fb, toastr);
  }
}
