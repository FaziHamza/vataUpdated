import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule, TimeLeftPipe } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { DesktopSearchComponent } from './desktop-search/desktop-search.component';



@NgModule({
  declarations: [SearchComponent, DesktopSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule, 
    MaterialModule, 
    FlexLayoutModule, 
    SharedModule
  ],
  providers: [
    TimeLeftPipe
  ]
})
export class SearchModule { }
