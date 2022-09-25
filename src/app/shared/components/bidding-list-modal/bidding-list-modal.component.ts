import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bidding-list-modal',
  templateUrl: './bidding-list-modal.component.html',
  styleUrls: ['./bidding-list-modal.component.scss']
})
export class BiddingListModalComponent implements OnInit {

  dataGet: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BiddingListModalComponent>,
  ) {
    if (data) {
      this.dataGet = data;
    }
   }

   ngOnInit() {
    console.log(this.dataGet)
  }

  onConfirmClick(): void {
    this.dialogRef.close();
  }

}
