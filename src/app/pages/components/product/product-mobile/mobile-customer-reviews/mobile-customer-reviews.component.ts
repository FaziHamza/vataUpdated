import { Component, OnInit } from '@angular/core';
import { DesktopCustomerReviewsComponent } from '../../product-web/desktop-customer-reviews/desktop-customer-reviews.component';
import { Lightbox } from 'ngx-lightbox';
import { UserService } from 'src/app/core';
import { ProductService } from '../../product.service';

import { AppSizeStateService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-customer-reviews',
  templateUrl: './mobile-customer-reviews.component.html',
  styleUrls: ['./mobile-customer-reviews.component.scss']
})
export class MobileCustomerReviewsComponent extends DesktopCustomerReviewsComponent implements OnInit {

  constructor(
    dialog: MatDialog,
    productService: ProductService,
    userService: UserService,
    _lightbox: Lightbox,
    public appSize: AppSizeStateService
  ) { 
    super(dialog, productService, userService, _lightbox, appSize);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
