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
  servicesList:any;
  // today = new Date();
  params = new FormData();
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.newMemberBookingForminIt();
    this.getAllServices();
  }

  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;

    const fileList: FileList = data.files;
    const file = fileList[0];
    this.params.append('photo', file, file.name);    
  }

  getAllServices() {
    debugger
    let shopId = this.userService.getUser().shop_details.id;
    this.dashboardService.getServicesList(shopId).subscribe(res => {
      this.servicesList = res?.data;
      console.log("services List", this.servicesList);
    })
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
      debugger
      this.params.append("member_name",this.newMemberBookingForm.value.memberName);
      this.params.append("member_surname",this.newMemberBookingForm.value.memberSurname);
      this.params.append("phone_isd",this.newMemberBookingForm.value.phoneCode);
      this.params.append("phone_number",this.newMemberBookingForm.value.phoneNumber);
      this.params.append("email",this.newMemberBookingForm.value.email);
      this.params.append("position_skills",this.newMemberBookingForm.value.position_skills);
      this.params.append("shop_id",this.userService.getUser().shop_details.id);
      this.params.append("working_hour", "08:00 - 19:00");
      this.params.append("default_member", "false");
      this.params.append("gender", '');
      this.params.append("services_list", JSON.stringify(this.categoryList));
     
    //  this.params = {
    //   "member_name": this.newMemberBookingForm.value.memberName,
    //   "member_surname": this.newMemberBookingForm.value.memberSurname,
    //   "phone_isd": this.newMemberBookingForm.value.phoneCode,
    //   "phone_number": this.newMemberBookingForm.value.phoneNumber,
    //   "email": this.newMemberBookingForm.value.email,
    //   "position_skills": this.newMemberBookingForm.value.position_skills,
    //   "shop_id": this.userService.getUser().shop_details.id,
    //   "working_hour": "08:00 - 19:00",
    //   "default_member": false,
    //   "gender": "",
    // }

    if (this.newMemberBookingForm.valid) {
      this.dashboardService.postAddBookingMember(this.params).subscribe(res => {
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
  categoryList:any = [];
  selectAll: boolean = false;
  selectMember(id) {
    if(this.categoryList.includes(id) == false) {
      this.categoryList.push(id);
    }
    else {
      this.categoryList = this.categoryList.filter(item => item !== id)
    }
    console.log(this.categoryList);
  }

  selectAllMembers(select) {
    debugger
    this.categoryList = [];
    this.selectAll = !this.selectAll;

    if (this.selectAll == true) {
      select.forEach(element => {
        this.categoryList.push(element.id);
      });
    } else {
      this.categoryList = [];
    }

    console.log(this.categoryList);    
  }
}
