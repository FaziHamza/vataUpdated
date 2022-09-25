import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { CommonModule } from '@angular/common';
import { DesktopHomeComponent } from './desktop-home/desktop-home.component';
import { DesktopHomeHeaderComponent } from './desktop-home/desktop-home-header/desktop-home-header.component';
import { MobileHomeFooterComponent } from './mobile-home/mobile-home-footer/mobile-home-footer.component';
import { MobileHomeHeaderComponent } from './mobile-home/mobile-home-header/mobile-home-header.component';
import { SharedModule, MaterialModule, TimeLeftPipe } from 'src/app/shared';
import { DesktopHomeFooterComponent } from './desktop-home/desktop-home-footer/desktop-home-footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DesktopBestBookingsComponent } from './desktop-home/desktop-best-bookings/desktop-best-bookings.component';
import { DesktopPopularCategoriesComponent } from './desktop-home/desktop-popular-categories/desktop-popular-categories.component';
import { DesktopPopularMarketplaceComponent } from './desktop-home/desktop-popular-marketplace/desktop-popular-marketplace.component';
import { MobileBestBookingsComponent } from './mobile-home/mobile-best-bookings/mobile-best-bookings.component';
import { MobilePopularCategoriesComponent } from './mobile-home/mobile-popular-categories/mobile-popular-categories.component';
import { MobilePopularMarketplaceComponent } from './mobile-home/mobile-popular-marketplace/mobile-popular-marketplace.component';
import { MobileTopDealsComponent } from './mobile-home/mobile-top-deals/mobile-top-deals.component';
import { DesktopTopDealsComponent } from './desktop-home/desktop-top-deals/desktop-top-deals.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        HomeContainerComponent,
        MobileHomeComponent,
        DesktopHomeComponent,
        DesktopHomeHeaderComponent,
        MobileHomeFooterComponent,
        MobileHomeHeaderComponent,
        DesktopHomeFooterComponent,
        DesktopBestBookingsComponent,
        DesktopPopularCategoriesComponent,
        DesktopPopularMarketplaceComponent,
        MobileBestBookingsComponent,
        MobilePopularCategoriesComponent,
        MobilePopularMarketplaceComponent,
        MobileTopDealsComponent,
        DesktopTopDealsComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule,
        MatCardModule,
        MaterialModule,
        FlexLayoutModule,
        SlickCarouselModule
    ],
    providers: [
        TimeLeftPipe
    ]
})
export class HomeModule { }
