import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component'
import { DesktopSearchComponent } from './desktop-search/desktop-search.component';

const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    children: [
      {
        path: '',
        component: DesktopSearchComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
