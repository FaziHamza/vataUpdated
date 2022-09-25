import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/shared/services/bookings.service';

@Component({
  selector: 'app-best-bookings',
  templateUrl: './best-bookings.component.html',
  styleUrls: ['./best-bookings.component.scss']
})
export class BestBookingsComponent implements OnInit {
  config = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
  bestBookings = [];
  constructor(
    private bookingService: BookingsService
  ) { }

  ngOnInit() {
    this.bookingService.getBestBookings().subscribe(res => {
      this.bestBookings = res.data;
    });
  }

}
