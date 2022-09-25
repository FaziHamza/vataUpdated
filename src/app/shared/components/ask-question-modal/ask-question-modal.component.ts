import { Component, OnInit, Inject } from '@angular/core';

import { ProductService } from 'src/app/pages/components/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-question-modal',
  templateUrl: './ask-question-modal.component.html',
  styleUrls: ['./ask-question-modal.component.scss']
})
export class AskQuestionModalComponent implements OnInit {

  inputData: any = {}
  questionModal = {
    'seller_id': '',
    'product_id': '',
    'user_id': '',
    'question': ''
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AskQuestionModalComponent>,
    private productService: ProductService,
    private toastr: ToastrService
  ) { 
    if (data) {
      this.inputData = data;
    }
   }

  ngOnInit() {
    console.log(this.inputData)
    this.questionModal = {
      'seller_id': this.inputData.seller_id,
      'product_id': this.inputData.productId,
      'user_id': this.inputData.userId,
      'question': ''
    };
  }

  onConfirmClick(): void {
    this.submit();
  }

  submit() {
    this.productService.askQuestion(this.questionModal).subscribe(res => {
      this.toastr.success('Question Added Successfully!');
      this.dialogRef.close(true);
    }, err => {
      console.log(err);
    });
  }

}
