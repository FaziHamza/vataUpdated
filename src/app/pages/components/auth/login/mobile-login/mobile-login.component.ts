import { Component, OnInit } from '@angular/core';
import { DesktopLoginComponent } from '../desktop-login/desktop-login.component';
import { ApiService, UserService, TempSignupDataService } from 'src/app/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { ProductService } from '../../../product/product.service';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.scss']
})
export class MobileLoginComponent extends DesktopLoginComponent implements OnInit {

  constructor(themeService: ThemeService, apiService: ApiService, formBuilder: FormBuilder,
    userService: UserService, productService: ProductService, router: Router, tempSignup: TempSignupDataService, toastrService: ToastrService) { 
    super(themeService, apiService, formBuilder, userService, productService, router, tempSignup, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
