import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookProductService } from '../../book-product.service';

@Component({
  selector: 'app-desktop-all-reviews',
  templateUrl: './desktop-all-reviews.component.html',
  styleUrls: ['./desktop-all-reviews.component.scss']
})
export class DesktopAllReviewsComponent implements OnInit {
  shopId;
  reviews;
  constructor(private route: ActivatedRoute, private bookProductService: BookProductService) { }

  ngOnInit(): void {
    this.getShopId();
    this.getAllReviews();
  }

  getShopId() {
    this.route.parent.params.subscribe(params => {
      this.shopId = params.id;
    })
  }

  getAllReviews() {
    this.bookProductService.getShopReviews(this.shopId).subscribe((response) => {
      if (response.Status === 'Success') {
        this.reviews = response.data;
      }
    })
  }

}
