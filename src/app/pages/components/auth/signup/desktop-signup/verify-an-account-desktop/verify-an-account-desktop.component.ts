import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'verify-an-account-desktop',
  templateUrl: './verify-an-account-desktop.component.html',
  styleUrls: ['./verify-an-account-desktop.component.scss']
})
export class VerifyAnAccountDesktopComponent implements OnInit {

  @Output() selectStep = new EventEmitter<number>();
  @Output() addressType = new EventEmitter<string>();

  step: number = 4;
  isBusiness = false;
  constructor(private toastr: ToastrService) { }
  isBillingAdded = window.localStorage.getItem('billingUploaded');
  isPassportAdded = window.localStorage.getItem('passportUploaded');


  ngOnInit() {
    if (localStorage.getItem('isPrivateRegistered')) {
      this.isBusiness = false;
    } else if (localStorage.getItem('isBusinessRegistered')) {
      this.isBusiness = true;
    }
  }

  onSelectStep(type) {
    window.localStorage.setItem('addressType', type);
    this.selectStep.emit(this.step);
    this.addressType.emit(type);
  }

  onPhoneVerifyFinish() {
    this.selectStep.emit(5);
  }

  finish() {
    if (window.localStorage.getItem('isPrivateRegistered') && window.localStorage.getItem('phoneVerified')) {
      this.selectStep.emit(5);
    } else if (window.localStorage.getItem('isBusinessRegistered') && window.localStorage.getItem('phoneVerified') && window.localStorage.getItem('billingUploaded') && window.localStorage.getItem('passportUploaded')) {
      this.selectStep.emit(5);
    } else {
      this.toastr.info("Please complete all the steps.");
    }
  }
}
