import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';


import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { DesktopAddProductVariationComponent } from './desktop-add-product-variation/desktop-add-product-variation.component';
import { MobileAddProductVariationComponent } from './mobile-add-product-variation/mobile-add-product-variation.component';
import { AddProductVariationRoutingModule } from './add-product-variation-routing.module';
import { AddProductVariationComponent } from './add-product-variation.component';
import { DragulaService, DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [AddProductVariationComponent, DesktopAddProductVariationComponent, MobileAddProductVariationComponent],
  imports: [
    CommonModule,
    AddProductVariationRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    NgxMatColorPickerModule,
    RxReactiveFormsModule,
    DragulaModule,
    MatTableModule
  ], 
  providers:[DragulaService, { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }]
})
export class AddProductVariationModule { }
