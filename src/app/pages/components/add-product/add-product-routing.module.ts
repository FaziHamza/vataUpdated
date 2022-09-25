import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductContainerComponent } from './add-product-container.component';

const routes: Routes = [
  {
    path: "",
    component: AddProductContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
