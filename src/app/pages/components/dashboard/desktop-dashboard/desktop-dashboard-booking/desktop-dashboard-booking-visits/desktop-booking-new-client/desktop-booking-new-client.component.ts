import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desktop-booking-new-client',
  templateUrl: './desktop-booking-new-client.component.html',
  styleUrls: ['./desktop-booking-new-client.component.scss']
})
export class DesktopBookingNewClientComponent implements OnInit {

  newClientBookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }
  uploadingFiles = [];
  fd = new FormData();
  preview = [];
  ngOnInit() {
    this.newClientBookingForminIt();
  }

  newClientBookingForminIt() {
    this.newClientBookingForm = this.fb.group({
      clientName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      timeFrom: ['', Validators.required],
      timeTo: ['', Validators.required],
      note: ['', Validators.required],
      messageClient: ['', Validators.required],
    });
  }

  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;

    const fileList: FileList = data.files;
    const file = fileList[0];
    this.fd.append('client_pic', file, file.name);    
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }
}
