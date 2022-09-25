import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-fees-to-pay-negative-payment',
  templateUrl: './dashboard-fees-to-pay-negative-payment.component.html',
  styleUrls: ['./dashboard-fees-to-pay-negative-payment.component.scss']
})
export class DashboardFeesToPayNegativePaymentComponent implements OnInit {

  copied: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  copyText(text) {
    navigator.clipboard.writeText(text);
    this.copied = !this.copied;
    console.log(text + ' > text copied');
  }

}
