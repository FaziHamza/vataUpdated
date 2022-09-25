import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { AddReviewModel } from 'src/app/core/models/add-review.model';
import { NgForm } from '@angular/forms';

import { AppSizeStateService } from 'src/app/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-write-review-modal',
  templateUrl: './write-review-modal.component.html',
  styleUrls: ['./write-review-modal.component.scss']
})
export class WriteReviewModalComponent implements OnInit {

  dataGet: any = {}
  size = '15px';
  reviewModel: AddReviewModel;
  file: File = null;
  preview = [];
  uploadingFiles: any[] = [];
  fd = new FormData();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<WriteReviewModalComponent>,
    private userService: UserService,
    private productService: ProductService,
    private toastrService: ToastrService,
    public appSize: AppSizeStateService
  ) {
    if (data) {
      this.dataGet = data;
      this.dataGet.formSubmitted = new EventEmitter();
      this.reviewModel = new AddReviewModel();
    }
   }

   ngOnInit() {
    console.log(this.dataGet)
  }

  onConfirmClick(): void {
    // this.dialogRef.close();
  }

  onFileUpload(data) {
    console.log(data);
    this.preview = data.preview;
    this.uploadingFiles = data.files;
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }

  setRating(rating) {
    this.reviewModel.rating = rating;
    this.fd.set('rating', rating);
    console.log(rating);
  }

  setItemDescRating(rating) {
    this.reviewModel.item_desc_rating = rating;
    this.fd.set('item_desc_rating', rating);
    console.log('Item', rating);
  }
  setCommunicationRating(rating) {
    this.fd.set('communication_rating', rating);
    this.reviewModel.communication_rating = rating;
    console.log('communication', rating);
  }
  setShippingRating(rating) {
    this.fd.set('shipping_rating', rating);
    this.reviewModel.shipping_rating = rating;
    console.log('shipping', rating);
  }
  setShippingTimeRating(rating) {
    this.fd.set('shipping_time_rating', rating);
    this.reviewModel.shipping_time_rating = rating;
    console.log('shipping time', rating);
  }

  submit(form: NgForm) {
    console.log(form);
    
    this.fd.set('product', this.dataGet.productId);
    this.fd.set('title', form.value.title);
    this.fd.set('desc', form.value.desc);


    this.fd.set('customer', this.userService.getUser().user_details.id);
    this.uploadingFiles.forEach(file => this.fd.append('image', file));

    this.fd.forEach((value, key) => {
      console.log(key, value);
    })
    this.productService.addProductReview(this.fd).subscribe(res => {
      this.toastrService.success('Review Added Successfully');
      this.dataGet.formSubmitted.emit();
      console.log(res);
      this.dialogRef.close(true);
    }, err => {
    this.uploadingFiles.forEach(file => this.fd.delete('image'));
    this.preview = [];
    this.uploadingFiles = [];
      console.log(err);
    });
  }

}
