import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-public-profile-booking',
  templateUrl: './desktop-public-profile-booking.component.html',
  styleUrls: ['./desktop-public-profile-booking.component.scss']
})
export class DesktopPublicProfileBookingComponent implements OnInit {

  @Input('bookingData') bookingData: string;

  constructor() { }

  ngOnInit() {
  }

}
