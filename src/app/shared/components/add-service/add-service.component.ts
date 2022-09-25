import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  onFormSubmit = new EventEmitter();
  dialogData;
  services = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    if (data) {
      this.dialogData = data;
    }
   }

  ngOnInit() {
    this.services = this.dialogData.services;
  }

  bookService(service) {
    this.onFormSubmit.emit(service);
  }

}
