import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingAppRoutingModule } from './booking-app-routing.module';
import { BookingAppComponent } from './booking-app.component';
import { BookingVistComponent } from './booking-vist/booking-vist.component';


@NgModule({
  declarations: [BookingAppComponent, BookingVistComponent],
  imports: [
    CommonModule,
    BookingAppRoutingModule
  ]
})
export class BookingAppModule { }
