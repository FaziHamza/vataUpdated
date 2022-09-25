import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductWebComponent } from '../product-web/product-web.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSizeStateService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard/dashboard.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { Lightbox } from 'ngx-lightbox';
import { TimeLeftPipe } from 'src/app/shared';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product-mobile.component.html',
  styleUrls: ['./product-mobile.component.scss']
})
export class ProductMobileComponent extends ProductWebComponent implements OnInit {

  configMobile = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false
  };
  constructor(
    dialog: MatDialog,
    router: ActivatedRoute,
    _router: Router,
    productService: ProductService,
    userService: UserService,
    toastrService: ToastrService,
    cdr: ChangeDetectorRef,
    dashboardService: DashboardService,
    appSize: AppSizeStateService,
    themeService: ThemeService,
    _lightbox: Lightbox,
    timeLeft: TimeLeftPipe
  ) {
    super(dialog, router, _router, productService, userService, toastrService, cdr, dashboardService, appSize, themeService, _lightbox, timeLeft);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
