import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-public-profile',
  templateUrl: './desktop-dashboard-public-profile.component.html',
  styleUrls: ['./desktop-dashboard-public-profile.component.scss']
})
export class DesktopDashboardPublicProfileComponent implements OnInit {

  publicProfile: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.dashboardService.getPublicProfile().subscribe(res => {
      this.publicProfile = res;
      console.log(res);
    });
  }

}
