import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { BusinessInfoDesktopComponent } from '../../desktop-signup/business-info-desktop/business-info-desktop.component';
import { UserService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'business-info-mobile',
  templateUrl: './business-info-mobile.component.html',
  styleUrls: ['./business-info-mobile.component.scss']
})
export class BusinessInfoMobileComponent extends BusinessInfoDesktopComponent implements OnInit {

  constructor(fb: FormBuilder,
    signupData: TempSignupDataService,
    dialog: MatDialog,
    userService: UserService,
    toastrService: ToastrService
    ) {
    super(fb, signupData, dialog, userService, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
