import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-bookings-outlet',
  templateUrl: './desktop-bookings-outlet.component.html',
  styleUrls: ['./desktop-bookings-outlet.component.scss']
})
export class DesktopBookingsOutletComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
