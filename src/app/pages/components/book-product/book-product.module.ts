import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule, SocialShareModalComponent } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BookProductRoutingModule } from './book-product-routing.module';
import { BookProductContainerComponent } from './book-product-container.component';
import { DesktopBookProductComponent } from './desktop-book-product/desktop-book-product.component';
import { MobileBookProductComponent } from './mobile-book-product/mobile-book-product.component';
import { DesktopSellerBookingComponent } from './desktop-book-product/desktop-seller-booking/desktop-seller-booking.component';
import { DesktopBookProductOutletComponent } from './desktop-book-product/desktop-book-product-outlet/desktop-book-product-outlet.component';
import { DesktopServiceListComponent } from './desktop-book-product/desktop-service-list/desktop-service-list.component';
import { MobileBookingComponent } from './mobile-book-product/mobile-booking/mobile-booking.component';
import { DesktopSellerBookingOutletComponent } from './desktop-book-product/desktop-seller-booking-outlet/desktop-seller-booking-outlet.component';
import { DesktopMakeBookingOutletComponent } from './desktop-book-product/desktop-make-booking-outlet/desktop-make-booking-outlet.component';
import { DesktopMakeBookingComponent } from './desktop-book-product/desktop-make-booking/desktop-make-booking.component';
import { MobileMakeBookingComponent } from './mobile-book-product/mobile-make-booking/mobile-make-booking.component';
import { BookProductService } from './book-product.service';
import { WriteReviewModalV2Component } from 'src/app/shared/components/write-review-modal-v2/write-review-modal-v2.component';
import { AddServiceComponent } from 'src/app/shared/components/add-service/add-service.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DesktopAllReviewsComponent } from './desktop-book-product/desktop-all-reviews/desktop-all-reviews.component';

@NgModule({
  declarations: [BookProductContainerComponent, DesktopBookProductComponent,
     MobileBookProductComponent, DesktopSellerBookingComponent, 
     DesktopBookProductOutletComponent, DesktopServiceListComponent, 
     MobileBookingComponent, DesktopSellerBookingOutletComponent,
      DesktopMakeBookingOutletComponent, DesktopMakeBookingComponent,
       MobileMakeBookingComponent, DesktopAllReviewsComponent],
  imports: [
    CommonModule,
    BookProductRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [
    BookProductService
  ],
  entryComponents: [
    WriteReviewModalV2Component,
    SocialShareModalComponent,
    AddServiceComponent
  ]
})
export class BookProductModule { }
