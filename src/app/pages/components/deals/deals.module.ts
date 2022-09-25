import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DealsRoutingModule } from './deals-routing.module';
import { DesktopDealsComponent } from './desktop-deals/desktop-deals.component';
import { MobileDealsComponent } from './mobile-deals/mobile-deals.component';
import { DealsContainerComponent } from './deals-container.component';
import { DesktopDealsProductOutletComponent } from './desktop-deals/desktop-deals-product-outlet/desktop-deals-product-outlet.component';
import { DesktopDealsProductComponent } from './desktop-deals/desktop-deals-product/desktop-deals-product.component';
import { MobileDealsProductComponent } from './mobile-deals/mobile-deals-product/mobile-deals-product.component';

@NgModule({
  declarations: [DesktopDealsComponent, MobileDealsComponent, DealsContainerComponent, DesktopDealsProductOutletComponent, DesktopDealsProductComponent, MobileDealsProductComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class DealsModule { }
