import { Component, OnInit } from '@angular/core';
import { DesktopPasswordResetComponent } from '../desktop-password-reset/desktop-password-reset.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-mobile-password-reset',
  templateUrl: './mobile-password-reset.component.html',
  styleUrls: ['./mobile-password-reset.component.scss']
})
export class MobilePasswordResetComponent extends DesktopPasswordResetComponent implements OnInit {

  constructor(
    formBuilder: FormBuilder,
    router: Router,
    authService: UserService,
    toastrService: ToastrService,
    themeService: ThemeService
  ) { 
    super(formBuilder, router, authService, toastrService, themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
