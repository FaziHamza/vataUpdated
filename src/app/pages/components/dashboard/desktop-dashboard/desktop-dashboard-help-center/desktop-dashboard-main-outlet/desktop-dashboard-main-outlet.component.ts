import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';


@Component({
  selector: 'app-desktop-dashboard-main-outlet',
  templateUrl: './desktop-dashboard-main-outlet.component.html',
  styleUrls: ['./desktop-dashboard-main-outlet.component.scss']
})
export class DesktopDashboardMainOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
