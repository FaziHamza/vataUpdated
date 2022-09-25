import { Component, OnInit } from '@angular/core';
import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'app-desktop-dashboard-widgets',
  templateUrl: './desktop-dashboard-widgets.component.html',
  styleUrls: ['./desktop-dashboard-widgets.component.scss']
})
export class DesktopDashboardWidgetsComponent implements OnInit {

  constructor(private dragulaService: DragulaService) { }

  ngOnInit(): void {
  }

}
