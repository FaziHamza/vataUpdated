import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsContainerComponent } from './deals-container.component';
import { DesktopDealsProductOutletComponent } from './desktop-deals/desktop-deals-product-outlet/desktop-deals-product-outlet.component';

const routes: Routes = [
  {
    path: "",
    component: DealsContainerComponent,
    children: [
      {
        path: 'deals-product',
        component: DesktopDealsProductOutletComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
