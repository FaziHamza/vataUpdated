import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-booking-statistics',
  templateUrl: './desktop-dashboard-booking-statistics.component.html',
  styleUrls: ['./desktop-dashboard-booking-statistics.component.scss']
})
export class DesktopDashboardBookingStatisticsComponent implements OnInit {

  bookingStatistics: any;
  topClients: any;
  topMembers: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.bookingStats();
    this.getTopClients();
    this.getTopMembers();
  }

  bookingStats() {
    this.dashboardService.getBookingStats().subscribe(res => {
      this.bookingStatistics = res;
      // console.log(res);
    });
  }

  getTopClients() {
    this.dashboardService.getTopClients().subscribe(res => {
      this.topClients = res;
      // console.log(res);
    });
  }
  
  getTopMembers() {
    this.dashboardService.getTopMembers().subscribe(res => {
      this.topMembers = res;
      // console.log(res);
    });
  }

}
