import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';
import { WriteReviewModalComponent } from 'src/app/shared/components/write-review-modal/write-review-modal.component';
import { UserService } from 'src/app/core';
import { Lightbox } from 'ngx-lightbox';

import { AppSizeStateService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-desktop-customer-reviews',
  templateUrl: './desktop-customer-reviews.component.html',
  styleUrls: ['./desktop-customer-reviews.component.scss']
})
export class DesktopCustomerReviewsComponent implements OnInit {
  @Input() productId;
  @Input() isSelf = false;
  isReviewsCollapsed = false;
  images = [];
  reviewData;
  showReply = [];
  user = null;
  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private userService: UserService,
    private _lightbox: Lightbox,
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.getReview();
  }

  writeReviewDialog(): void {

    var width = '100%';
    if (!this.appSize.getIsMobileResolution()) {
      width = '60%';
    } else {
      width = '100%';
    }

    const dialogRef = this.dialog.open(WriteReviewModalComponent, {
      width: width,
      data: {
        type: 'no-border',
        title: 'Write a review',
        subTitle: '',
        productId: this.productId,
        formSubmitted: this.getReview()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReview();
      }
    });
  }

  getReview() {
    this.productService.getReview(this.productId).subscribe((res: any) => {
      this.reviewData = res;
      this.images = [];
      this.reviewData.forEach((data) => {
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
        this.getReview();
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
