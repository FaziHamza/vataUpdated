import { Component, OnInit } from '@angular/core';

import { DashboardFeesToPayNegativePaymentComponent } from '../../../../../../shared/components/dashboard-fees-to-pay-negative-payment/dashboard-fees-to-pay-negative-payment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-desktop-profile-fees-pay-postil',
  templateUrl: './desktop-profile-fees-pay-postil.component.html',
  styleUrls: ['./desktop-profile-fees-pay-postil.component.scss']
})
export class DesktopProfileFeesPayPostilComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DashboardFeesToPayNegativePaymentComponent, {
      width: '30%',
      data: {
        name: 'filter modal'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
