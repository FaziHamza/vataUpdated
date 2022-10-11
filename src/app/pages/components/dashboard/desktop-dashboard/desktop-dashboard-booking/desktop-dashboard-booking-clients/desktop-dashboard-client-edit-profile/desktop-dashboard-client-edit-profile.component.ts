import { Component, OnInit, Input, EventEmitter, Output,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-dashboard-client-edit-profile',
  templateUrl: './desktop-dashboard-client-edit-profile.component.html',
  styleUrls: ['./desktop-dashboard-client-edit-profile.component.scss']
})
export class DesktopDashboardClientEditProfileComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  @Output() selectType = new EventEmitter<string>();
  @Input('clientData') dataClient: any;
  
  selectedPhoneCode: string = '+41';
  selectedCountry: string = 'swizerland';
  
  editProfileClientBookingForm: FormGroup;

  today = Date.now();
  fd = new FormData();
  preview = [];
  uploadingFiles = [];

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.editProfileClientBookingFormInit();
    this.dataCheck();
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

  onSelectType(type) {
    this.selectType.emit(type);
  }

  editProfileClientBookingFormInit()
  {
    this.editProfileClientBookingForm = this.fb.group({
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
      allergens: ['', Validators.required],
      internal_note: ['', Validators.required],
    });
  }

  dataCheck() {
    this.editProfileClientBookingForm.setValue({
      clientName: this.dataClient.client_name,
      clientSurname: this.dataClient.client_surname,
      phoneCode: this.dataClient.postcode,
      phoneNumber: this.dataClient.phone_number,
      email: this.dataClient.email,
      streetName: this.dataClient.street,
      streetNumber: this.dataClient.street_num,
      city: this.dataClient.city,
      postCode: this.dataClient.postcode,
      country: this.dataClient.country,
      discount: this.dataClient.discount,
      birthday: this.dataClient.birth_date,
      allergens: this.dataClient.allergens,
      internal_note: this.dataClient.internal_note,
    });
  }

  updateClient() {
    let date = new Date(this.editProfileClientBookingForm.value.birthday);
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    let params = {
      "client_pic": this.fd,
      "client_name": this.editProfileClientBookingForm.value.clientName,
      "client_surname": this.editProfileClientBookingForm.value.clientSurname,
      "phone_isd": this.editProfileClientBookingForm.value.phoneCode,
      "phone_number": this.editProfileClientBookingForm.value.phoneNumber,
      "email": this.editProfileClientBookingForm.value.email,
      "street_num": this.editProfileClientBookingForm.value.streetNumber,
      "street": this.editProfileClientBookingForm.value.streetName,
      "city": this.editProfileClientBookingForm.value.city,
      "country": this.editProfileClientBookingForm.value.country,
      "postcode": this.editProfileClientBookingForm.value.postCode,
      "birth_date": formattedDate,
      "discount": this.editProfileClientBookingForm.value.discount,
      "internal_note": this.editProfileClientBookingForm.value.internal_note,
      "allergens": this.editProfileClientBookingForm.value.allergens,
      "is_blocked": false,
      "quick_booking": true,
      "shop_id": this.userService.getUser().shop_details.id
    }

    if (this.editProfileClientBookingForm.valid) {
      this.subscriptions.push(
      this.dashboardService.updateClient(this.dataClient.id, params).subscribe(res => {
        console.log(res);
        
        if(res) {
          this.editProfileClientBookingForm.reset();
          this.onSelectType('details');
        }
      }));
      
    } else {
      console.log('Form is not completely filled up');
    }
  }

  deleteClient() {
    this.subscriptions.push(
    this.dashboardService.deleteClient(this.dataClient.id).subscribe(res => {
      console.log(res);

      if(res) {
        this.onSelectType('details');
      }
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
