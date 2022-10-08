import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core';
import { BookProductService } from 'src/app/pages/components/book-product/book-product.service';

@Component({
  selector: 'app-desktop-booking-all-reviews',
  templateUrl: './desktop-booking-all-reviews.component.html',
  styleUrls: ['./desktop-booking-all-reviews.component.scss']
})
export class DesktopBookingAllReviewsComponent implements OnInit {

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
    
    this.bookProductService.getShopReviews(this.shopId).subscribe((response) => {
      if (response.Status === 'Success') {
        this.reviews = response.data;
      }
    })
  }
}
