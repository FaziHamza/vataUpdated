import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-seller-booking-outlet',
  templateUrl: './desktop-seller-booking-outlet.component.html',
  styleUrls: ['./desktop-seller-booking-outlet.component.scss']
})
export class DesktopSellerBookingOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
