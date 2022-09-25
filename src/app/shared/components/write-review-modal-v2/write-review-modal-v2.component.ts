import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { AddReviewModel } from 'src/app/core/models/add-review.model';
import { NgForm } from '@angular/forms';
import { AppSizeStateService } from 'src/app/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-write-review-modal-v2',
  templateUrl: './write-review-modal-v2.component.html',
  styleUrls: ['./write-review-modal-v2.component.scss']
})
export class WriteReviewModalV2Component implements OnInit {
  dialogData: any = {}
  starRatingComponentSize = '15px';
  reviewModel: AddReviewModel;
  file: File = null;
  preview = [];
  uploadingFiles: any[] = [];
  formData = new FormData();
  onFormSubmit = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public appSize: AppSizeStateService
  ) {
    if (data) {
      this.dialogData = data;
      this.reviewModel = new AddReviewModel();
    }
   }

   ngOnInit() {
    console.log(this.dialogData)
  }

  onConfirmClick(): void {
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
    this.formData.set('rating', rating);
    console.log(rating);
  }

  setItemDescRating(rating) {
    this.reviewModel.item_desc_rating = rating;
    this.formData.set('item_desc_rating', rating);
    console.log('Item', rating);
  }
  setCommunicationRating(rating) {
    this.formData.set('communication_rating', rating);
    this.reviewModel.communication_rating = rating;
    console.log('communication', rating);
  }
  setShippingRating(rating) {
    this.formData.set('shipping_rating', rating);
    this.reviewModel.shipping_rating = rating;
    console.log('shipping', rating);
  }
  setShippingTimeRating(rating) {
    this.formData.set('shipping_time_rating', rating);
    this.reviewModel.shipping_time_rating = rating;
    console.log('shipping time', rating);
  }

  submit(form: NgForm) {
    // console.log(form);
    
    // this.formData.set('product', this.dialogData.productId);
    // this.formData.set('title', form.value.title);
    // this.formData.set('desc', form.value.desc);


    // this.formData.set('customer', this.userService.getUser().user_details.id);
    // this.uploadingFiles.forEach(file => this.formData.append('image', file));

    // this.formData.forEach((value, key) => {
    //   console.log(key, value);
    // })
    // this.productService.addProductReview(this.formData).subscribe(res => {
    //   this.toastrService.success('Review Added Successfully');
    //   this.dialogData.formSubmitted.emit();
    //   console.log(res);
    //   this.dialogRef.close(true);
    // }, err => {
    // this.uploadingFiles.forEach(file => this.formData.delete('image'));
    // this.preview = [];
    // this.uploadingFiles = [];
    //   console.log(err);
    // });
    this.reviewModel.image = this.uploadingFiles;
    this.onFormSubmit.emit(this.reviewModel);
  }

}
