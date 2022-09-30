import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingAppComponent } from './booking-app.component';
import { BookingVistComponent } from './booking-vist/booking-vist.component';

const routes1: Routes = [{ path: '', component: BookingAppComponent }];
const routes: Routes = [
  {
    path: '', component: BookingAppComponent,
    children: [
      {
        path: 'home',
        component: BookingVistComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingAppRoutingModule { }
