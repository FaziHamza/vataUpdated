import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OldHeaderComponent } from '../old-header.component';
import { UserService, ApiService, AppSizeStateService } from 'src/app/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-desktop-dashboard-header',
  templateUrl: './desktop-dashboard-header.component.html',
  styleUrls: ['./desktop-dashboard-header.component.scss']
})
export class DesktopDashboardHeaderComponent extends OldHeaderComponent implements OnInit {

  constructor(
     userService: UserService,
     router: Router,
     headerService: HeaderService,
     apiService: ApiService,
     cdr: ChangeDetectorRef,
     productService: ProductService,
     dialog: MatDialog,
     appSize: AppSizeStateService
  ) {
    super(userService, router, headerService, apiService, cdr, productService, dialog, appSize);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
