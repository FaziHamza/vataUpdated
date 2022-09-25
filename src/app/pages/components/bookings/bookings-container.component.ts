import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-bookings-container',
  templateUrl: './bookings-container.component.html',
  styleUrls: ['./bookings-container.component.scss']
})
export class BookingsContainerComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
