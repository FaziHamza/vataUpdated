import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AskForChange } from 'src/app/core/models/ask-for-change.model';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ask-for-change-modal',
  templateUrl: './ask-for-change-modal.component.html',
  styleUrls: ['./ask-for-change-modal.component.scss']
})
export class AskForChangeModalComponent implements OnInit {
  askForChangeModel = new AskForChange();
  askForChangeForm: FormGroup;
  files;
  preview;
  fd = new FormData();
  dataGet: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AskForChangeModalComponent>,
    private fb: FormBuilder,
    private product: ProductService,
    private toastr: ToastrService
  ) {
    if (data) {
      this.dataGet = data;
    }
   }

  ngOnInit() {
    console.log(this.dataGet);
    this.askForChangeForm = this.fb.group({
      change_on: [{ value: this.dataGet.productTitle, disabled: true}, [Validators.required]],
      charge: [null, [Validators.required]],
      message: [null, [Validators.required]]
    });
  }

  onConfirmClick(): void {
    this.onSubmit();
  }

  onFileUpload(data) {
    this.files = data.files;
    this.preview = data.preview;
  }

  removeImage(i) {
    this.files.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.files);
  }

  onSubmit() {

    this.askForChangeModel.user_id = this.dataGet.userId;
    // this.askForChangeModel.product_id = this.dataGet.productId;
    this.askForChangeModel.charge = this.askForChangeForm.value.charge;
    this.askForChangeModel.messege = this.askForChangeForm.value.message;
    this.askForChangeModel.change_on = this.dataGet.productId;

    for (const key in this.askForChangeModel) {
      if (key) {
        this.fd.append(key, this.askForChangeModel[key]);
      }
    }
    // this.files.forEach(file => this.fd.append('image', file));
    this.product.askForChange(this.fd).subscribe((res) => {
      console.log(res);
      this.dialogRef.close(true);
      this.toastr.success("Asked for change successfully.");
    },
      err => {
        console.log(err);
        // this.files.forEach(file => this.fd.delete('image'));
        this.preview = [];
        this.files = [];
      });
  }


}
