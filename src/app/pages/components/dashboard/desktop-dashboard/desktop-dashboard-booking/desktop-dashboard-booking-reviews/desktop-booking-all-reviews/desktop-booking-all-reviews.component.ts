import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core';
import { BookProductService } from 'src/app/pages/components/book-product/book-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-booking-all-reviews',
  templateUrl: './desktop-booking-all-reviews.component.html',
  styleUrls: ['./desktop-booking-all-reviews.component.scss']
})
export class DesktopBookingAllReviewsComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];

  shopId;
  reviews;
  constructor(private route: ActivatedRoute,  private userService: UserService,private bookProductService: BookProductService) { }

  ngOnInit(): void {
    this.getShopId();
    this.getAllReviews();
  }
  getShopId() {
    this.shopId = this.userService.getUser().shop_details.id;
  
  }

  getAllReviews() {
    this.subscriptions.push(
    this.bookProductService.getShopReviews(this.shopId).subscribe((response) => {
      if (response.Status === 'Success') {
        this.reviews = response.data;
      }
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
