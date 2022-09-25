import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrderRoutingModule } from './order-routing.module';
import { OrderContainerComponent } from './order-container.component';
import { DesktopOrderComponent } from './desktop-order/desktop-order.component';
import { MobileOrderComponent } from './mobile-order/mobile-order.component';

@NgModule({
  declarations: [OrderContainerComponent, DesktopOrderComponent, MobileOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class OrderModule { }
