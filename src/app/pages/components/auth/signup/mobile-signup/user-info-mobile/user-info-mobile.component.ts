import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { UserInfoDesktopComponent } from '../../desktop-signup/user-info-desktop/user-info-desktop.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core';


@Component({
  selector: 'user-info-mobile',
  templateUrl: './user-info-mobile.component.html',
  styleUrls: ['./user-info-mobile.component.scss']
})
export class UserInfoMobileComponent extends UserInfoDesktopComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    userService: UserService,
    signupData: TempSignupDataService,
    toast: ToastrService
  ) {
    super(fb, userService, signupData, toast);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
