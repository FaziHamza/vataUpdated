import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';

@Component({
  selector: 'app-desktop-booking-new-visit',
  templateUrl: './desktop-booking-new-visit.component.html',
  styleUrls: ['./desktop-booking-new-visit.component.scss']
})
export class DesktopBookingNewVisitComponent implements OnInit {

  newVisitBookingForm: FormGroup;

  constructor(
    private fb: FormBuilder, private dashboardService: DashboardService
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

  addNewMember() {

    let params = {
      "client_name": this.newVisitBookingForm.value.clientName,
      "executed": this.newVisitBookingForm.value.executed,
      "service": this.newVisitBookingForm.value.service,
      "note": this.newVisitBookingForm.value.note,
      "message_client": this.newVisitBookingForm.value.message_client,
    }

    if (this.newVisitBookingForm.valid) {
      this.dashboardService.addClient(params).subscribe(res => {
        console.log(res);
        
        if(res) {
          this.newVisitBookingForm.reset();
        }
      });
    } else {
      console.log('Form is not completely filled up');
    }
  }

}
