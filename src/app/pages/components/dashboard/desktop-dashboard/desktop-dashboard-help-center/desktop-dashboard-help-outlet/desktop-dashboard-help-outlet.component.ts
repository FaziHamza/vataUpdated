import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';


@Component({
  selector: 'app-desktop-dashboard-help-outlet',
  templateUrl: './desktop-dashboard-help-outlet.component.html',
  styleUrls: ['./desktop-dashboard-help-outlet.component.scss']
})
export class DesktopDashboardHelpOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
