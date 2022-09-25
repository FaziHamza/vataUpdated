import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desktop-booking-new-visit',
  templateUrl: './desktop-booking-new-visit.component.html',
  styleUrls: ['./desktop-booking-new-visit.component.scss']
})
export class DesktopBookingNewVisitComponent implements OnInit {

  newVisitBookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.newVisitBookingForminIt();
  }

  newVisitBookingForminIt() {
    this.newVisitBookingForm = this.fb.group({
      clientName: ['', Validators.required],
      executed: ['', Validators.required],
      service: ['', Validators.required],
      note: ['', Validators.required],
      message_client: ['', Validators.required],
    });
  }

}
