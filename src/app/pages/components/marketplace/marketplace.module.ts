import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { DesktopMarketplaceComponent } from './desktop-marketplace/desktop-marketplace.component';
import { MobileMarketplaceComponent } from './mobile-marketplace/mobile-marketplace.component';
import { SharedModule, MaterialModule, FilterModalComponent, TimeLeftPipe } from 'src/app/shared';
import { MarketplaceContainerComponent } from './marketplace-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarketplaceCategoriesComponent } from './desktop-marketplace/marketplace-categories/marketplace-categories.component';
import { MarketplacePopularGoodsComponent } from './desktop-marketplace/marketplace-popular-goods/marketplace-popular-goods.component';
import { MarketplaceSearchViewComponent } from './desktop-marketplace/marketplace-search-view/marketplace-search-view.component';
import { DesktopMarketplaceOutletComponent } from './desktop-marketplace/desktop-marketplace-outlet/desktop-marketplace-outlet.component';
import { SaveSearchModalComponent } from 'src/app/shared/components/save-search-modal/save-search-modal.component';
import { MarketplaceCategoriesMobileComponent } from './mobile-marketplace/marketplace-categories-mobile/marketplace-categories-mobile.component';
import { MarketplacePopularGoodsMobileComponent } from './mobile-marketplace/marketplace-popular-goods-mobile/marketplace-popular-goods-mobile.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    MarketplaceContainerComponent, 
    DesktopMarketplaceComponent, 
    MobileMarketplaceComponent, 
    MarketplaceCategoriesComponent, 
    MarketplacePopularGoodsComponent, 
    MarketplaceSearchViewComponent, 
    DesktopMarketplaceOutletComponent, 
    MarketplaceCategoriesMobileComponent, 
    MarketplacePopularGoodsMobileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    MarketplaceRoutingModule,
    SlickCarouselModule
  ],
  entryComponents: [
    FilterModalComponent, 
    SaveSearchModalComponent],
  providers: [
    TimeLeftPipe
  ]
})
export class MarketplaceModule { }
