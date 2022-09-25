import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  dataGet: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertModalComponent>,
    public appSize: AppSizeStateService
  ) {
    if (data) {
      this.dataGet = data;
    }
   }

  ngOnInit() {
    console.log(this.dataGet)
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
