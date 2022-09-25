import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-profile-outlet',
  templateUrl: './desktop-dashboard-profile-outlet.component.html',
  styleUrls: ['./desktop-dashboard-profile-outlet.component.scss']
})
export class DesktopDashboardProfileOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
