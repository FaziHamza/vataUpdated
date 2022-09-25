import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LoginContainerComponent } from './login/login-container.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupContainerComponent } from './signup/signup-container.component';
import { PaymentComponent } from './signup/payment/payment.component';
import { VerifyEmailAccountComponent } from './verify-email-account/verify-email-account.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'reset-password',
        component: PasswordResetComponent,
      },
      {
        path: 'login',
        component: LoginContainerComponent,
      },
      {
        path: 'forgot-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'signup',
        component: SignupContainerComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'verify-account',
        component: VerifyEmailAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
