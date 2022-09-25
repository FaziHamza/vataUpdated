import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductContainerComponent } from './product-container.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductContainerComponent,
    children: [
      {
        path: ':id',
        redirectTo: 'product',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
