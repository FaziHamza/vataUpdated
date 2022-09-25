import { Component, OnInit } from '@angular/core';
import { DesktopBestBookingsComponent } from '../../desktop-home/desktop-best-bookings/desktop-best-bookings.component';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-best-bookings',
  templateUrl: './mobile-best-bookings.component.html',
  styleUrls: ['./mobile-best-bookings.component.scss']
})
export class MobileBestBookingsComponent extends DesktopBestBookingsComponent implements OnInit {
  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    "nextArrow": false,
    "prevArrow": false
  };
  constructor(homepageService: HomeService, router: Router) {
    super(homepageService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
