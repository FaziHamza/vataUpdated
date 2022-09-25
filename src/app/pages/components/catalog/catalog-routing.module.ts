import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogContainerComponent } from './catalog-container.component';
import { DesktopCatalogComponent } from './desktop-catalog/desktop-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
