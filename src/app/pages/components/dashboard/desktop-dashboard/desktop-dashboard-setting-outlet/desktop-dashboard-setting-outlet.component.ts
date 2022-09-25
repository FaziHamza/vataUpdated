import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-setting-outlet',
  templateUrl: './desktop-dashboard-setting-outlet.component.html',
  styleUrls: ['./desktop-dashboard-setting-outlet.component.scss']
})
export class DesktopDashboardSettingOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
