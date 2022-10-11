import { Component, OnInit, Input, EventEmitter, Output ,OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-booking-edit-member',
  templateUrl: './desktop-booking-edit-member.component.html',
  styleUrls: ['./desktop-booking-edit-member.component.scss']
})
export class DesktopBookingEditMemberComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  @Output() selectType = new EventEmitter<string>();
  @Input('memberData') dataMember: any;

  selectedPhoneCode: string = '+41';

  editMemberBookingForm: FormGroup;

  fd = new FormData();
  preview = [];
  uploadingFiles = [];
  picture: any;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private toaster:ToastrService
  ) { }

  ngOnInit() {
    
    this.dataMember;
    this.editMemberBookingForminIt();
    this.dataCheck();
  }

  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;

    const fileList: FileList = data.files;
    const file = fileList[0];
    this.picture = file;  
    // this.fd.append('client_pic', file, file.name);    
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

  editMemberBookingForminIt() {
    this.editMemberBookingForm = this.fb.group({
      memberName: ['', Validators.required],
      memberSurname: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      position_skills: ['', Validators.required],
    });
  }

  dataCheck() {
    this.editMemberBookingForm.setValue({
      memberName: this.dataMember.member_name,
      memberSurname: this.dataMember.member_surname,
      phoneCode: this.dataMember.phone_isd,
      phoneNumber: this.dataMember.phone_number,
      email: this.dataMember.email,
      position_skills: this.dataMember.position_skills,
    });
  }

  updateMember() {
    let params = {
      "photo": this.picture,
      "member_name": this.editMemberBookingForm.value.memberName,
      "member_surname": this.editMemberBookingForm.value.memberSurname,
      "phone_isd": this.editMemberBookingForm.value.phoneCode,
      "phone_number": this.editMemberBookingForm.value.phoneNumber,
      "email": this.editMemberBookingForm.value.email,
      "position_skills": this.editMemberBookingForm.value.position_skills,
      "shop_id": this.userService.getUser().shop_details.id,
      "default_member": false,
      "working_hour": "08:00 - 19:00",
      "gender": "",
    }

    if (this.editMemberBookingForm.valid) {
      this.subscriptions.push(
      this.dashboardService.putUpdateBookingMember(this.dataMember.id, params).subscribe(res => {
        console.log(res);
        
        if(res) {
          this.editMemberBookingForm.reset();
          this.onSelectType('details');
        }
      }));
      
    } else {
      console.log('Form is not completely filled up');
    }
  }

  deleteMember() {
    this.subscriptions.push(
    this.dashboardService.deleteBookingMember(this.dataMember.id).subscribe(res => {
      console.log(res);

      if(res) {
        this.toaster.success("Information deleted successfully!")
        this.onSelectType('details');
      }
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
