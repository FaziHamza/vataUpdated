import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookProductContainerComponent } from './book-product-container.component';
import { DesktopBookProductOutletComponent } from './desktop-book-product/desktop-book-product-outlet/desktop-book-product-outlet.component';
import { DesktopSellerBookingOutletComponent } from './desktop-book-product/desktop-seller-booking-outlet/desktop-seller-booking-outlet.component';
import { DesktopServiceListComponent } from './desktop-book-product/desktop-service-list/desktop-service-list.component';
import { DesktopMakeBookingOutletComponent } from './desktop-book-product/desktop-make-booking-outlet/desktop-make-booking-outlet.component';
import { DesktopAllReviewsComponent } from './desktop-book-product/desktop-all-reviews/desktop-all-reviews.component';


const routes: Routes = [
  {
    path: ":id",
    component: BookProductContainerComponent,
    children: [
      {
        path: '',
        component: DesktopBookProductOutletComponent,
      },
      {
        path: 'seller-booking',
        component: DesktopSellerBookingOutletComponent,
      },
      {
        path: 'make-booking',
        component: DesktopMakeBookingOutletComponent,
      },
      {
        path: 'make-booking/:serviceId',
        component: DesktopMakeBookingOutletComponent,
      },
      {
        path: 'service-list',
        component: DesktopServiceListComponent,
      },
      {
        path: 'all-reviews',
        component: DesktopAllReviewsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookProductRoutingModule { }
