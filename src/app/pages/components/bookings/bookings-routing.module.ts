import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsContainerComponent } from './bookings-container.component';
import { DesktopBookingsOutletComponent } from './desktop-bookings/desktop-bookings-outlet/desktop-bookings-outlet.component';
import { BookingsSearchViewComponent } from './desktop-bookings/bookings-search-view/bookings-search-view.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsContainerComponent,
    children: [
      {
        path: '',
        component: DesktopBookingsOutletComponent,
      },
      {
        path: ':category',
        component: BookingsSearchViewComponent,
      },
      {
        path: ':category/:subcategory',
        component: BookingsSearchViewComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
