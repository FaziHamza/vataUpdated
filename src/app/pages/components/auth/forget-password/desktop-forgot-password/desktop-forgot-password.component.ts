import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService, UserService } from 'src/app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pattern } from 'src/app/shared/regex.pattern';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { environment } from 'src/environments/environment';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-desktop-forgot-password',
  templateUrl: './desktop-forgot-password.component.html',
  styleUrls: ['./desktop-forgot-password.component.scss']
})
export class DesktopForgotPasswordComponent implements OnInit {

  subscription: Subscription = new Subscription();
  forgetPasswordForm: FormGroup;
  submitted: boolean = false;
  isThemeDark: boolean = false;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) {
   }

  ngOnInit() {
    this.checkDarkMode();
    
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(Pattern.emailRegex)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgetPasswordForm.invalid) {
      return;
    }

    this.subscription.add(this.apiService.post(ApiEndPoints.AUTH.PASSWORD_RESET, {email: this.forgetPasswordForm.value.email, base_url: environment.FRONT_END_URL}).subscribe(res => {
      this.toastrService.success('Email has been sent successfully!');
      this.forgetPasswordForm.reset();
        this.submitted = false;
    }, err => {
    this.submitted = false;
    this.toastrService.clear();
      this.toastrService.error(err?.details);
      console.log(err);
    }));

  }
  get f() {
    return this.forgetPasswordForm.controls;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.isThemeDark = true;
    } else {
      this.isThemeDark = false;
    }
  }

}
