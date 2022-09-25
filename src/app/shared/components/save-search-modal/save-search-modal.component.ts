import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-search-modal',
  templateUrl: './save-search-modal.component.html',
  styleUrls: ['./save-search-modal.component.scss']
})
export class SaveSearchModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<SaveSearchModalComponent>,) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
