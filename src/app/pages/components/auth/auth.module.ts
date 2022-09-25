import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../../../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LoginContainerComponent } from './login/login-container.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MobileLoginComponent } from './login/mobile-login/mobile-login.component';
import { DesktopLoginComponent } from './login/desktop-login/desktop-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupContainerComponent } from './signup/signup-container.component';
import { MobileSignupComponent } from './signup/mobile-signup/mobile-signup.component';
import { DesktopSignupComponent } from './signup/desktop-signup/desktop-signup.component';
import { UserInfoMobileComponent } from './signup/mobile-signup/user-info-mobile/user-info-mobile.component';
import { BusinessInfoMobileComponent } from './signup/mobile-signup/business-info-mobile/business-info-mobile.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { VerifyAnAccountMobileComponent } from './signup/mobile-signup/verify-an-account-mobile/verify-an-account-mobile.component';
import { AddressPassportMobileComponent } from './signup/mobile-signup/verify-an-account-mobile/address-passport-mobile/address-passport-mobile.component';
import { BillingAddressMobileComponent } from './signup/mobile-signup/verify-an-account-mobile/billing-address-mobile/billing-address-mobile.component';
import { ChoosePlanMobileComponent } from './signup/mobile-signup/verify-an-account-mobile/choose-plan-mobile/choose-plan-mobile.component';
import { UserInfoDesktopComponent } from './signup/desktop-signup/user-info-desktop/user-info-desktop.component';
import { VerifyAnAccountDesktopComponent } from './signup/desktop-signup/verify-an-account-desktop/verify-an-account-desktop.component';
import { AddressPassportDesktopComponent } from './signup/desktop-signup/verify-an-account-desktop/address-passport-desktop/address-passport-desktop.component';
import { BillingAddressDesktopComponent } from './signup/desktop-signup/verify-an-account-desktop/billing-address-desktop/billing-address-desktop.component';
import { ChoosePlanDesktopComponent } from './signup/desktop-signup/verify-an-account-desktop/choose-plan-desktop/choose-plan-desktop.component';
import { BusinessInfoDesktopComponent } from './signup/desktop-signup/business-info-desktop/business-info-desktop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DesktopForgotPasswordComponent } from './forget-password/desktop-forgot-password/desktop-forgot-password.component';
import { MobileForgotPasswordComponent } from './forget-password/mobile-forgot-password/mobile-forgot-password.component';
import { AuthorizedModalComponent } from './signup/desktop-signup/business-info-desktop/authorized-modal/authorized-modal.component';
import { PhoneVerifyComponent } from './signup/desktop-signup/verify-an-account-desktop/phone-verify/phone-verify.component';
import { PaymentComponent } from './signup/payment/payment.component';
import { PhoneVerifyMobileComponent } from './signup/mobile-signup/verify-an-account-mobile/phone-verify-mobile/phone-verify-mobile.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VerifyEmailAccountComponent } from './verify-email-account/verify-email-account.component';
import { DesktopPasswordResetComponent } from './password-reset/desktop-password-reset/desktop-password-reset.component';
import { MobilePasswordResetComponent } from './password-reset/mobile-password-reset/mobile-password-reset.component';


@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgOtpInputModule,
    SlickCarouselModule
  ],
  declarations: [
    AuthComponent,
    PasswordResetComponent,
    LoginContainerComponent,
    ForgetPasswordComponent,
    MobileLoginComponent,
    DesktopLoginComponent,
    SignupContainerComponent,
    MobileSignupComponent,
    DesktopSignupComponent,
    UserInfoMobileComponent,
    BusinessInfoMobileComponent,
    VerifyAnAccountMobileComponent,
    AddressPassportMobileComponent,
    BillingAddressMobileComponent,
    ChoosePlanMobileComponent,
    UserInfoDesktopComponent,
    BusinessInfoDesktopComponent,
    VerifyAnAccountDesktopComponent,
    AddressPassportDesktopComponent,
    BillingAddressDesktopComponent,
    ChoosePlanDesktopComponent,
    DesktopForgotPasswordComponent,
    MobileForgotPasswordComponent,
    AuthorizedModalComponent,
    PhoneVerifyComponent,
    PaymentComponent,
    PhoneVerifyMobileComponent,
    VerifyEmailAccountComponent,
    DesktopPasswordResetComponent,
    MobilePasswordResetComponent
  ],
  entryComponents: [AuthorizedModalComponent],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
