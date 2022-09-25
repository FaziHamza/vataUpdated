import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard',
  templateUrl: './desktop-dashboard.component.html',
  styleUrls: ['./desktop-dashboard.component.scss']
})
export class DesktopDashboardComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
