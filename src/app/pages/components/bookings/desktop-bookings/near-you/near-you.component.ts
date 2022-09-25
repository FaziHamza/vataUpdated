import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/shared/services/bookings.service';

@Component({
  selector: 'app-near-you',
  templateUrl: './near-you.component.html',
  styleUrls: ['./near-you.component.scss']
})
export class NearYouComponent implements OnInit {
  config = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
  nearYouBookings = [];
  constructor(
    private bookingService: BookingsService
  ) { }

  ngOnInit() {
    this.bookingService.getNearYou().subscribe(res => {
      this.nearYouBookings = res.data;
    });
  }

}
