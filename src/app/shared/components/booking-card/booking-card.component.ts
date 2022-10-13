import { Component, OnInit, Input } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {
  @Input() booking;

  constructor(public appSize: AppSizeStateService,) { }

  ngOnInit() {
  }

}
