import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DesktopSellerAllItemsComponent } from '../../desktop-seller/desktop-seller-all-items/desktop-seller-all-items.component';
import { ProductService } from '../../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-mobile-seller-all-items',
  templateUrl: './mobile-seller-all-items.component.html',
  styleUrls: ['./mobile-seller-all-items.component.scss']
})
export class MobileSellerAllItemsComponent extends DesktopSellerAllItemsComponent implements OnInit {

  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
  constructor(
    dashboard: DashboardService,
    productService: ProductService,
    router: ActivatedRoute,
    route: Router,
    cdr: ChangeDetectorRef
  ) { 
    super(dashboard, productService, router, route, cdr);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
