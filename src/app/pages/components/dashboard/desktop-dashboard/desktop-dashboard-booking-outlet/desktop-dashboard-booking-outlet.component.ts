import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-booking-outlet',
  templateUrl: './desktop-dashboard-booking-outlet.component.html',
  styleUrls: ['./desktop-dashboard-booking-outlet.component.scss']
})
export class DesktopDashboardBookingOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
