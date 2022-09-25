import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-make-booking-outlet',
  templateUrl: './desktop-make-booking-outlet.component.html',
  styleUrls: ['./desktop-make-booking-outlet.component.scss']
})
export class DesktopMakeBookingOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
