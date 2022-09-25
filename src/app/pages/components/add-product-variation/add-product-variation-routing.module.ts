import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductVariationComponent } from './add-product-variation.component';


const routes: Routes = [
  {
    path: "",
    component: AddProductVariationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductVariationRoutingModule { }
