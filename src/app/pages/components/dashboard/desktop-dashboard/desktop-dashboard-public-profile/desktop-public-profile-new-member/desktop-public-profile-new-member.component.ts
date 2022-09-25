import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-public-profile-new-member',
  templateUrl: './desktop-public-profile-new-member.component.html',
  styleUrls: ['./desktop-public-profile-new-member.component.scss']
})
export class DesktopPublicProfileNewMemberComponent implements OnInit {

  newMemberForm: FormGroup;
  today = Date.now();
  fd = new FormData();
  preview = [];
  uploadingFiles = [];
  allPermissions: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.newMemberForm = this.fb.group({
      userName: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required],
      location: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      streetName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      country: ['', Validators.required],
      askForChange: [false, Validators.required],
      buyAGoods: [false, Validators.required],
      buyAVisits: [false, Validators.required],
      isChild: [true, Validators.required],
    });
  }

  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;

    const fileList: FileList = data.files;
    const file = fileList[0];
    this.fd.append('profile_pic', file, file.name);    
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }

  selectAllPermissions() {
    this.allPermissions = !this.allPermissions;

    this.newMemberForm.patchValue({
      askForChange: !this.newMemberForm.value.askForChange,
      buyAGoods: !this.newMemberForm.value.buyAGoods,
      buyAVisits: !this.newMemberForm.value.buyAVisits
    });
  }

  addMember() {

    let date = new Date(this.newMemberForm.value.birthday);
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    this.fd.append('username', this.newMemberForm.value.userName);
    this.fd.append('email', this.newMemberForm.value.email);
    this.fd.append('gender', this.newMemberForm.value.gender);
    this.fd.append('first_name', this.newMemberForm.value.firstname);
    this.fd.append('last_name', this.newMemberForm.value.lastname);
    // this.fd.append('profile_pic', picture);
    this.fd.append('birth_date', formattedDate);
    this.fd.append('password', this.newMemberForm.value.password);
    this.fd.append('location', this.newMemberForm.value.location);
    this.fd.append('street', this.newMemberForm.value.streetName);
    this.fd.append('street_num', this.newMemberForm.value.streetNumber);
    this.fd.append('city', this.newMemberForm.value.city);
    this.fd.append('country', this.newMemberForm.value.country);
    this.fd.append('postcode', this.newMemberForm.value.postCode);
    this.fd.append('phone_isd', this.newMemberForm.value.phoneCode);
    this.fd.append('phone_number', this.newMemberForm.value.phoneNumber);
    this.fd.append('is_child', this.newMemberForm.value.isChild);
    this.fd.append('parent_user', this.userService.getUser().user_details.id);
    this.fd.append('can_buy', this.newMemberForm.value.buyAGoods);
    this.fd.append('can_book', this.newMemberForm.value.buyAVisits);
    this.fd.append('can_ask', this.newMemberForm.value.askForChange);
    
    if (this.newMemberForm.valid) {
      this.dashboardService.addFamilyMember(this.fd).subscribe(res => {
        console.log(res);
      });
    } else {
      console.log('Form is not completely filled up');
    }

  }

}
