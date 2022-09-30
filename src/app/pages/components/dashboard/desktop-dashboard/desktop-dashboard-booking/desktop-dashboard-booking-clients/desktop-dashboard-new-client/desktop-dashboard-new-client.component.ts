import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-desktop-dashboard-new-client',
  templateUrl: './desktop-dashboard-new-client.component.html',
  styleUrls: ['./desktop-dashboard-new-client.component.scss']
})
export class DesktopDashboardNewClientComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();

  newClientBookingForm: FormGroup;

  fd = new FormData();
  preview = [];
  today = new Date();
  uploadingFiles = [];

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private userService: UserService,
    private toasterService: ToastrService
  ) { }

  ngOnInit() {
    this.newClientBookingForm = this.fb.group({
      clientName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      streetName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      country: ['', Validators.required],
      discount: ['', Validators.required],
      birthday: ['', Validators.required],
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

  addNewMember() {

    let date = new Date(this.newClientBookingForm.value.birthday);
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    let params = {
      "client_pic": this.fd,
      "client_name": this.newClientBookingForm.value.clientName,
      "client_surname": this.newClientBookingForm.value.clientSurname,
      "phone_isd": this.newClientBookingForm.value.phoneCode,
      "phone_number": this.newClientBookingForm.value.phoneNumber,
      "email": this.newClientBookingForm.value.email,
      "street_num": this.newClientBookingForm.value.streetNumber,
      "street": this.newClientBookingForm.value.streetName,
      "city": this.newClientBookingForm.value.city,
      "country": this.newClientBookingForm.value.country,
      "postcode": this.newClientBookingForm.value.postCode,
      "birth_date": formattedDate,
      "discount": this.newClientBookingForm.value.discount,
      "internal_note": '',
      "allergens": '',
      "is_blocked": false,
      "quick_booking": true,
      "shop_id": this.userService.getUser().shop_details.id,
      "bookings_count": 0,
      "finished": 0,
      "cancelled": 0,
      "no_shows": 0,
      "total_revenue": 0,
    }

    if (this.newClientBookingForm.valid) {
      this.dashboardService.addClient(params).subscribe(res => {
        debugger
        console.log(res);

        if (res) {
          this.newClientBookingForm.reset();
          this.onSelectType('details');
        }
      });
    } else {
      console.log('Form is not completely filled up');
    }
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

}
