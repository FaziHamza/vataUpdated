import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PagesAuthResolverService } from './pages-auth-resolver.service';
import { AuthGuard } from '../core';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./components/marketplace/marketplace.module').then(m => m.MarketplaceModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('./components/bookings/bookings.module').then(m => m.BookingsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('./components/catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'add-product',
        loadChildren: () => import('./components/add-product/add-product.module').then(m => m.AddProductModule)
      },
      {
        path: 'add-product-variation/:id',
        loadChildren: () => import('./components/add-product-variation/add-product-variation.module').then(m => m.AddProductVariationModule)
      },
      {
        path: 'seller',
        loadChildren: () => import('./components/seller/seller.module').then(m => m.SellerModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./components/order/order.module').then(m => m.OrderModule)
      },
      {
        path: ' ',
        loadChildren: () => import('./components/book-product/book-product.module').then(m => m.BookProductModule)
      },
      {
        path: 'deals',
        loadChildren: () => import('./components/deals/deals.module').then(m => m.DealsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'error/:type',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
