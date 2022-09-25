import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-profile-coupons-new',
  templateUrl: './desktop-profile-coupons-new.component.html',
  styleUrls: ['./desktop-profile-coupons-new.component.scss']
})
export class DesktopProfileCouponsNewComponent implements OnInit {

  tab: string = "marketplace";

  selectedIncrement = 0;
  increments = [
    {id: 1, value: '0.13$'},
    {id: 2, value: '45$'},
    {id: 3, value: '10$'},
    {id: 4, value: '20$'},
  ];

  selectedDelivery = 0;
  deliverys = [
    {id: 1, value: '1 Day'},
    {id: 2, value: '5 Days'},
    {id: 3, value: '5 Weeks'},
  ];

  payments = [];

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.tab = tab;
    console.log(this.tab);
  }

  selectIncrement(value) {
    this.selectedIncrement = value;
    console.log("selectedIncrement > ", this.selectedIncrement);
  }

  selectDelivery(value) {
    this.selectedDelivery = value;
    console.log("selectedDelivery > ", this.selectedDelivery);
  }

  selectPayment(payment) {
    if (this.payments.includes(payment)) {
      this.payments = this.payments.filter(item => item !== payment)
    } else {
      this.payments.push(payment);
    }

    console.log("payments > ", this.payments);
  }

}
