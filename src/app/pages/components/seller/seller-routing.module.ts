import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerContainerComponent } from './seller-container.component';

const routes: Routes = [
  {
    path: ':id/:type',
    component: SellerContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
