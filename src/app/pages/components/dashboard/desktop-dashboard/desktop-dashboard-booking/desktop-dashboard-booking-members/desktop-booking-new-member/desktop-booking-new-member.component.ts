import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-booking-new-member',
  templateUrl: './desktop-booking-new-member.component.html',
  styleUrls: ['./desktop-booking-new-member.component.scss']
})
export class DesktopBookingNewMemberComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();

  selectedPhoneCode: string = '+41';

  newMemberBookingForm: FormGroup;

  fd = new FormData();
  preview = [];
  uploadingFiles = [];
  // today = new Date();

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.newMemberBookingForminIt();
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

  newMemberBookingForminIt() {
    this.newMemberBookingForm = this.fb.group({
      memberName: ['', Validators.required],
      memberSurname: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      position_skills: ['', Validators.required],
    });
  }

  addNewMember() {

    let params = {
      "photo": this.fd,
      "member_name": this.newMemberBookingForm.value.memberName,
      "member_surname": this.newMemberBookingForm.value.memberSurname,
      "phone_isd": this.newMemberBookingForm.value.phoneCode,
      "phone_number": this.newMemberBookingForm.value.phoneNumber,
      "email": this.newMemberBookingForm.value.email,
      "position_skills": this.newMemberBookingForm.value.position_skills,
      "shop_id": this.userService.getUser().shop_details.id,
      "working_hour": "",
      "gender": "",
    }

    if (this.newMemberBookingForm.valid) {
      this.dashboardService.postAddMember(params).subscribe(res => {
        console.log(res);
        
        if(res) {
          this.newMemberBookingForm.reset();
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
