import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
