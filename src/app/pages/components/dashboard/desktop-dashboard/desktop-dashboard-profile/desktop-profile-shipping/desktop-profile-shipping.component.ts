import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';

@Component({
  selector: 'app-desktop-profile-shipping',
  templateUrl: './desktop-profile-shipping.component.html',
  styleUrls: ['./desktop-profile-shipping.component.scss']
})
export class DesktopProfileShippingComponent implements OnInit {
  shippingData;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getMyShippingOrders().subscribe(res => {
      this.shippingData = res.data;
    })
  }

}
