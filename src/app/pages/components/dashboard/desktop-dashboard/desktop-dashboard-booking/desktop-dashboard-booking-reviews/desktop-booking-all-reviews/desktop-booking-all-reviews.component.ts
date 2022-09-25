import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';

@Component({
  selector: 'app-desktop-booking-all-reviews',
  templateUrl: './desktop-booking-all-reviews.component.html',
  styleUrls: ['./desktop-booking-all-reviews.component.scss']
})
export class DesktopBookingAllReviewsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
