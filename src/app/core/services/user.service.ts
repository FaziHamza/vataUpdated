import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import sprintf from 'sprintf';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  public isPhoneVerified = false;

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.post('/user/tokenCheck/', {token: this.jwtService.getToken()})
      .subscribe(
        data => {
          if (data.Status === 'Success') {
            this.setAuth(data.data);
          } else {
            this.purgeAuth();
          }
        },
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    
    this.jwtService.saveToken(user.token_key);
    window.localStorage['user'] = JSON.stringify(user);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    console.log(this.getCurrentUser());
    
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  sendVerifyEmail(data) {
    return this.apiService.post(ApiEndPoints.USER.SEND_VERIFY_EMAIL, data);
  }

  verifyEmailAccount(data) {
    return this.apiService.post(ApiEndPoints.USER.VERIFY_ACCOUNT, data);
  }

  applyCoupon(data) {
    return this.apiService.post(ApiEndPoints.PAYMENT.CHECK_COUPON, data);
  }


  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    if (!(this.router.url === '/')) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  getCartId(is_business) {
    if (is_business) {
      return this.getUser().business_cart;
    } else {
      return this.getUser().private_cart;
    }
  }

  getShopId() {
  return this.getCurrentUser().shop_details.id;
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // // Update the user on the server (email, pass, etc)
  // update(user): Observable<User> {
  //   return this.apiService
  //   .put('/user', { user })
  //   .pipe(map(data => {
  //     // Update the currentUser observable
  //     this.currentUserSubject.next(data.user);
  //     return data.user;
  //   }));
  // }

  checkEmailExists(email) {
    return this.apiService.post(ApiEndPoints.AUTH.CHECK_EMAIL_EXISTS, { email: email });
  }

  checkNickNameExists(name) {
    return this.apiService.post(ApiEndPoints.AUTH.CHECK_NICKNAME_EXISTS, { username: name });
  }

  userRegister(data) {
    return this.apiService.post(ApiEndPoints.AUTH.USER_REGISTER, data);
  }

  modifyUser(data, id) {
    return this.apiService.patch(sprintf(ApiEndPoints.AUTH.USER_MODIFY, id), data);
  }

  getSignupDeps() {
    return this.apiService.get(ApiEndPoints.AUTH.SIGNUP_DEPS);
  }

  getTempRegisteredUser() {
    return JSON.parse(window.localStorage.getItem('tempRegisteredUser'));
  }

  setBillingAddress(formData) {
    return this.apiService.post(ApiEndPoints.USER.BILLING_ADDRESS, formData);
  }

  updateBillingAddress(id, data) {
    return this.apiService.patch(sprintf(ApiEndPoints.USER.BILLING_ADDRESS_MODIFY, id), data);
  }

  setPassportAddress(formData) {
    return this.apiService.post(ApiEndPoints.USER.PASSPORT_ADDRESS, formData);
  }

  updatePassportAddress(id, data) {
    return this.apiService.patch(sprintf(ApiEndPoints.USER.PASSPORT_ADDRESS_MODIFY, id), data);
  }

  getSubscriptionPlan() {
    return this.apiService.get(ApiEndPoints.PAYMENT.SUBSCRIPTION_PLAN);
  }

  clearSignupTempData() {
    localStorage.removeItem('passportAddress');
    localStorage.removeItem('passportAddressId');
    localStorage.removeItem('phoneVerified');
    localStorage.removeItem('addressType');
    localStorage.removeItem('billingAddress');
    localStorage.removeItem('privateInfo');
    localStorage.removeItem('isBusinessRegistered');
    localStorage.removeItem('passportUploaded');
    localStorage.removeItem('tempRegisteredUser');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('billingAddressId');
    localStorage.removeItem('billingUploaded');
    localStorage.removeItem('businessInfo');
    localStorage.removeItem('step');
  }

  passwordResetConfirm(keyAndPass) {
    return this.apiService.post(ApiEndPoints.AUTH.PASSWORD_RESET_CONFIRM, keyAndPass);
  }
}
