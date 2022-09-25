import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { UserService } from 'src/app/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-desktop-profile-rating-reviews',
  templateUrl: './desktop-profile-rating-reviews.component.html',
  styleUrls: ['./desktop-profile-rating-reviews.component.scss']
})
export class DesktopProfileRatingReviewsComponent implements OnInit {
  allReviews = [];
  newestReview = [];
  needToReview = [];
  sellerId;
  images = [];
  reviewData;
  showReply = [];
  constructor(private productService: ProductService, private userService: UserService, 
    private _lightbox: Lightbox) { }

  ngOnInit() {
    this.sellerId = this.userService.getCurrentUser().user_details.id;
    this.getAllReviews();
    this.getNewestReviews();
    this.getNeedToReviews();
    
  }

  getAllReviews() {
    this.productService.getReviewBySeller(this.sellerId).subscribe(res => {
      this.allReviews = res;
      this.images = [];
      this.allReviews.forEach((data) => {
        const imgs = [];
        data.image.forEach(img => {
          const src = img;
          const caption = '';
          const thumb = img;
          const album = {
            src: src,
            caption: caption,
            thumb: thumb
          };
          imgs.push({...album});
        });
        this.images.push([...imgs]);
      });
    });
  }

  getNewestReviews() {
    this.productService.getNewestReviewBySeller(this.sellerId).subscribe(res => {
      this.newestReview = res;
      this.images = [];
      this.newestReview.forEach((data) => {
        const imgs = [];
        data.image.forEach(img => {
          const src = img;
          const caption = '';
          const thumb = img;
          const album = {
            src: src,
            caption: caption,
            thumb: thumb
          };
          imgs.push({...album});
        });
        this.images.push([...imgs]);
    });
    });
  }

  getNeedToReviews() {
    this.productService.getNeedToReviewBySeller(this.sellerId).subscribe(res => {
      this.needToReview = res.data;
      this.needToReview.forEach((data) => {
        const imgs = [];
        data.image.forEach(img => {
          const src = img;
          const caption = '';
          const thumb = img;
          const album = {
            src: src,
            caption: caption,
            thumb: thumb
          };
          imgs.push({...album});
        });
        this.images.push([...imgs]);
    });
    });
  }

  replyToReview(inputEle: HTMLInputElement, reviewId, index) {
    if (inputEle.value) {
      const data = {
        desc: inputEle.value,
        customer: this.userService.getUser().user_details.id,
        parent: reviewId
      };
      this.productService.reviewReply(data).subscribe(res => {
        this.productService.getReviewBySeller(this.sellerId).subscribe(res => {
          this.allReviews = res;
        });
        this.showReply[index] = !this.showReply[index];
      }, err => {
        console.log(err);
      });
    }
  }

  open(images, index: number): void {
    // open lightbox
    this._lightbox.open(images, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
