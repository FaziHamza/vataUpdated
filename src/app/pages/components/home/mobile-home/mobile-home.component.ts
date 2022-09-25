import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService, ApiService, AppSizeStateService } from 'src/app/core';
import { OldHeaderComponent } from 'src/app/shared';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/layout/header.service';
import { ProductService } from '../../product/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss']
})
export class MobileHomeComponent extends OldHeaderComponent implements OnInit {
  config = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    "nextArrow": false,
    "prevArrow": false
  };
  user;
  profile_pic;
  constructor(userService: UserService, router: Router, headerService: HeaderService, api: ApiService, cdr: ChangeDetectorRef, productService: ProductService, dialog: MatDialog, appSize: AppSizeStateService) {
    super(userService, router, headerService, api, cdr, productService, dialog, appSize);
    this.user = userService.getUser() ? userService.getUser().user_details : null;
   }

  ngOnInit() {
    super.ngOnInit();
    if (this.user && this.user.profile_pic != null && this.user.profile_pic !== '') {
      this.profile_pic = this.user.profile_pic;
    } else {
      this.profile_pic = '/assets/img/avatar.png';
    }
  }

  search() {
   super.search(''); 
  }
}
