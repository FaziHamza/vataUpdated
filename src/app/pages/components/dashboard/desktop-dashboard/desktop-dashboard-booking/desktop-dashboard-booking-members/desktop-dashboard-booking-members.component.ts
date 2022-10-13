import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-dashboard-booking-members',
  templateUrl: './desktop-dashboard-booking-members.component.html',
  styleUrls: ['./desktop-dashboard-booking-members.component.scss']
})
export class DesktopDashboardBookingMembersComponent implements OnInit {

  loadType: string = 'details';
  memberData: any;

  constructor() { }

  ngOnInit() {
  }

  typeChange(type) {
    this.loadType = type;
  }

  getDataMember(data) {
    debugger
    this.memberData = data;
  }

}
