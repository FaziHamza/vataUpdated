import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [PagesComponent, ErrorComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
