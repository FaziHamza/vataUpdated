import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
// import { AlertModalComponent } from '../../../../shared/alert-modal/alert-modal.component';

import { UserService } from '../../../../../../../core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'choose-plan-desktop',
  templateUrl: './choose-plan-desktop.component.html',
  styleUrls: ['./choose-plan-desktop.component.scss']
})
export class ChoosePlanDesktopComponent implements OnInit {
  couponForm: FormGroup;
  subscriptionPlanData = null;
  isYearly = false;
  couponCode;
  type = "Monthly";
  user;

  @Output() selectStep = new EventEmitter<number>();

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.couponForm = this.fb.group({
      coupon_code: [null, [Validators.required]],
    });
    this.userService.getSubscriptionPlan().subscribe(res => {
      this.subscriptionPlanData = res;
    });
    this.user = this.userService.getTempRegisteredUser();
  }

  showYearly(e) {
    e.checked ? (this.isYearly = true) : (this.isYearly = false);
    this.type = this.isYearly ? "Yearly" : "Monthly";
  }

  submit() {
    if (this.couponForm.valid) {
      this.userService.applyCoupon({coupon_code: this.couponForm.value.coupon_code, user_id: this.user.id}).subscribe(res => {
        if (res.is_valid) {
          this.subscriptionPlanData = res.data;
          this.couponCode = this.couponForm.value.coupon_code
        } else {
          this.toastr.error("Invalid Coupon Code.")
        }
      }, err => {
        this.toastr.error("Invalid Coupon Code.")
      });
    }
  }

  nextStep2(v: number) {
    if (window.localStorage.getItem('isPrivateRegistered')) {
      this.selectStep.emit(2);
      this.toastr.info('You must register as a business user to avail the plans.')
    } else {
      this.router.navigate(["/auth/payment"], {
        queryParams: {
          planId: this.subscriptionPlanData[v].id,
          stripeId: this.subscriptionPlanData[v].stripe_plan_id,
          isYearly: this.isYearly,
          coupon_code: this.couponCode
        }
      });
    }
  }
}
