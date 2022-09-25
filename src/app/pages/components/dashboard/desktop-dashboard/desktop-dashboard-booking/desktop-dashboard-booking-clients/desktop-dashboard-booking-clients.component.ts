import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-dashboard-booking-clients',
  templateUrl: './desktop-dashboard-booking-clients.component.html',
  styleUrls: ['./desktop-dashboard-booking-clients.component.scss']
})
export class DesktopDashboardBookingClientsComponent implements OnInit {

  loadType: string = 'details';
  clientData: any;

  constructor() { }

  ngOnInit() {
  }

  typeChange(type) {
    this.loadType = type;
  }

  getDataClient(data) {
    this.clientData = data;
  }

}
