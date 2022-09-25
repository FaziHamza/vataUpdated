import { Component, OnInit } from '@angular/core';
import { DesktopForgotPasswordComponent } from '../desktop-forgot-password/desktop-forgot-password.component';
import { ApiService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mobile-forgot-password',
  templateUrl: './mobile-forgot-password.component.html',
  styleUrls: ['./mobile-forgot-password.component.scss']
})
export class MobileForgotPasswordComponent extends DesktopForgotPasswordComponent implements OnInit {

  constructor(apiService: ApiService, formBuilder: FormBuilder, toastrService: ToastrService) {
    super(apiService, formBuilder, toastrService);
   }

  ngOnInit() {
  }

}
