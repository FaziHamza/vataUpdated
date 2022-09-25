import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductContainerComponent } from './add-product-container.component';
import { DesktopAddProductComponent } from './desktop-add-product/desktop-add-product.component';
import { MobileAddProductComponent } from './mobile-add-product/mobile-add-product.component';
import { AddBookingComponent } from './desktop-add-product/add-booking/add-booking.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';

@NgModule({
  declarations: [AddProductContainerComponent, DesktopAddProductComponent, MobileAddProductComponent, AddBookingComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    NgxMatColorPickerModule,
    RxReactiveFormsModule
  ], 
  providers:[{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }]
})
export class AddProductModule { }
