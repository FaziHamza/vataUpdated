import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-seller-all-items',
  templateUrl: './desktop-seller-all-items.component.html',
  styleUrls: ['./desktop-seller-all-items.component.scss']
})
export class DesktopSellerAllItemsComponent implements OnInit {
  sellerData = [];
  myData = [];
  serviceData = [];
  shopInfo;
  sellerId;
  type;
  config = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
    "nextArrow": false,
    "infinite": false
  };
  constructor(
    private dashboard: DashboardService,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.type = params['type'];
      this.sellerId = id;

      if (id) {
        this.productService.getProductsOfSeller(id).subscribe(sellerData => {
          this.sellerData = sellerData;
          this.myData = sellerData;
          this.cdr.detectChanges();
        });
        this.dashboard.getShopRatingInfo(id).subscribe(shopData => {
          this.shopInfo = shopData.data;
          this.cdr.detectChanges();
        });
      }
      this.dashboard.getBookingsByShop(id).subscribe(res => {
        this.serviceData = res.data;
        if (this.type === 'booking') {
          this.myData = this.serviceData;
        }
      });
    });
  }

  toggler(isProduct) {
    if (isProduct) {
      this.route.navigate(['/seller', this.sellerId, 'marketplace']);
    } else {
      this.route.navigate(['/seller', this.sellerId, 'booking']);
    }
  }

}
