import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerContainerComponent } from './seller-container.component';
import { DesktopSellerComponent } from './desktop-seller/desktop-seller.component';
import { MobileSellerComponent } from './mobile-seller/mobile-seller.component';
import { DesktopSellerAllItemsComponent } from './desktop-seller/desktop-seller-all-items/desktop-seller-all-items.component';
import { MobileSellerAllItemsComponent } from './mobile-seller/mobile-seller-all-items/mobile-seller-all-items.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [SellerContainerComponent, DesktopSellerComponent, MobileSellerComponent, DesktopSellerAllItemsComponent, MobileSellerAllItemsComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    SlickCarouselModule
  ]
})
export class SellerModule { }
