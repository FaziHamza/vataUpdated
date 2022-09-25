import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogContainerComponent } from './catalog-container.component';
import { DesktopCatalogComponent } from './desktop-catalog/desktop-catalog.component';
import { MobileCatalogComponent } from './mobile-catalog/mobile-catalog.component';

@NgModule({
  declarations: [CatalogContainerComponent, DesktopCatalogComponent, MobileCatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule, 
    MaterialModule, 
    FlexLayoutModule, 
    SharedModule
  ]
})
export class CatalogModule { }
