import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desktop-booking-confirm-visit',
  templateUrl: './desktop-booking-confirm-visit.component.html',
  styleUrls: ['./desktop-booking-confirm-visit.component.scss']
})
export class DesktopBookingConfirmVisitComponent implements OnInit {

  confirmVisitBookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.confirmVisitBookingForminIt();
  }

  confirmVisitBookingForminIt() {
    this.confirmVisitBookingForm = this.fb.group({
      clientName: ['', Validators.required],
      executed: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      timeFrom: ['', Validators.required],
      timeTo: ['', Validators.required],
    });
  }

}
