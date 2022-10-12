import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-fees-to-pay-negative-payment',
  templateUrl: './dashboard-fees-to-pay-negative-payment.component.html',
  styleUrls: ['./dashboard-fees-to-pay-negative-payment.component.scss']
})
export class DashboardFeesToPayNegativePaymentComponent implements OnInit {
  // dataGet: any = {}
  copied: boolean = false;

  constructor(
  //   @Inject(MAT_DIALOG_DATA) private data: any,
  //  private dialogRef: MatDialogRef<DashboardFeesToPayNegativePaymentComponent>
   ) 
   {
    // if (data) {
    //   this.dataGet = data;
    // }
    }

  ngOnInit() {
    // console.log(this.dataGet)
  }

  copyText(text) {
    navigator.clipboard.writeText(text);
    this.copied = !this.copied;
    console.log(text + ' > text copied');
  }

}
