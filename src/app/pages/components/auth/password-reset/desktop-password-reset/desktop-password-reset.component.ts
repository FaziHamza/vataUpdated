import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Pattern } from 'src/app/shared/regex.pattern';
import { Router } from '@angular/router';
import { PagesAuthResolverService } from 'src/app/pages/pages-auth-resolver.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-desktop-password-reset',
  templateUrl: './desktop-password-reset.component.html',
  styleUrls: ['./desktop-password-reset.component.scss']
})
export class DesktopPasswordResetComponent implements OnInit {
  pattern: Pattern = new Pattern();

  private subscription: Subscription = new Subscription();
  isThemeDark: boolean = false;

  submitted = false;
  resetPasswordForm: FormGroup;
  token = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: UserService,
    private toastrService: ToastrService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.isThemeDark.subscribe(res => {
      this.isThemeDark = res;
    });
    this.router.routerState.root.queryParams.subscribe(params => {
      if (params.token) {
        this.token = params.token;
        if (!this.token) {
          this.router.navigate(['404']);
        }
      }
    });
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    },
      { validator: this.isPasswordSame });
  }

  isPasswordSame(group: FormGroup) {
    const password = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return password === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    const tokenAndPass = {
      token: this.token,
      password: this.resetPasswordForm.value.password
    };
    this.subscription.add(this.authService.passwordResetConfirm(tokenAndPass).subscribe(res => {
      this.toastrService.success('Password changed successfully.');
      this.submitted = false;
      this.resetPasswordForm.reset();

      this.router.navigateByUrl('/auth/login');
    }, err => {
      this.submitted = false;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
