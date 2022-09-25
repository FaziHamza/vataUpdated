import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MarketplaceContainerComponent } from './marketplace-container.component';
import { MarketplaceSearchViewComponent } from './desktop-marketplace/marketplace-search-view/marketplace-search-view.component';
import { DesktopMarketplaceOutletComponent } from './desktop-marketplace/desktop-marketplace-outlet/desktop-marketplace-outlet.component';

const desktopRoutes: Routes = [
  {
    path: '',
    component: MarketplaceContainerComponent,
    children: [
      {
        path: '',
        component: DesktopMarketplaceOutletComponent,
      },
      {
        path: ':category',
        component: MarketplaceSearchViewComponent,
      },
      {
        path: ':category/:subcategory',
        component: MarketplaceSearchViewComponent,
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(desktopRoutes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { 
}
