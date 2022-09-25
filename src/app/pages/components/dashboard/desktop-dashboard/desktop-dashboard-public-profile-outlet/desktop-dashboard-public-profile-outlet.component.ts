import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-public-profile-outlet',
  templateUrl: './desktop-dashboard-public-profile-outlet.component.html',
  styleUrls: ['./desktop-dashboard-public-profile-outlet.component.scss']
})
export class DesktopDashboardPublicProfileOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
