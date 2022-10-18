import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsContainerComponent } from './bookings-container.component';
import { DesktopBookingsComponent } from './desktop-bookings/desktop-bookings.component';
import { MobileBookingsComponent } from './mobile-bookings/mobile-bookings.component';
import { DesktopBookingsOutletComponent } from './desktop-bookings/desktop-bookings-outlet/desktop-bookings-outlet.component';
import { BookingCategoriesComponent } from './desktop-bookings/booking-categories/booking-categories.component';
import { BestBookingsComponent } from './desktop-bookings/best-bookings/best-bookings.component';
import { NearYouComponent } from './desktop-bookings/near-you/near-you.component';
import { BookingsSearchViewComponent } from './desktop-bookings/bookings-search-view/bookings-search-view.component';
import { SharedModule, MaterialModule, BookingsFilterModalComponent, TimeLeftPipe } from 'src/app/shared';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BookingCategoriesMobileComponent } from './mobile-bookings/booking-categories-mobile/booking-categories-mobile.component';
import { NearYouMobileComponent } from './mobile-bookings/near-you-mobile/near-you-mobile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BookingsContainerComponent,
    DesktopBookingsComponent, MobileBookingsComponent,
    DesktopBookingsOutletComponent, BookingCategoriesComponent,
    BestBookingsComponent, NearYouComponent, BookingsSearchViewComponent,
    BookingCategoriesMobileComponent, NearYouMobileComponent],
  imports: [
    CommonModule,
    SharedModule,
    SlickCarouselModule,
    FlexLayoutModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    BookingsRoutingModule
    
  ],
  entryComponents: [
    BookingsFilterModalComponent
  ],
  providers: [
    TimeLeftPipe
  ]
})
export class BookingsModule { }
