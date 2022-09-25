import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { DataHoldingService } from '../../../../../../shared/services/data-holding.service';
import { AlertModalComponent } from '../../../../../../shared/components/alert-modal/alert-modal.component';
import { AppSizeStateService } from 'src/app/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-desktop-public-profile-edit-member',
  templateUrl: './desktop-public-profile-edit-member.component.html',
  styleUrls: ['./desktop-public-profile-edit-member.component.scss']
})
export class DesktopPublicProfileEditMemberComponent implements OnInit {

  newMemberForm: FormGroup;

  fd = new FormData();
  preview = [];
  uploadingFiles = [];
  allPermissions: boolean = false;
  profilePicture: any;
  updatedProfilePicture: any;

  familyMember: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private dataHolder: DataHoldingService,
    private dialog: MatDialog,
    public appSize: AppSizeStateService
    ) { }

    ngOnInit() {
      this.initForm();     
      this.getFamilyMemberData();
    }

    initForm() {
      this.newMemberForm = this.fb.group({
        userName: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.required],
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

    getFamilyMemberData() {
      this.familyMember = this.dataHolder.getData();

      this.newMemberForm.setValue({
        userName: this.familyMember.username,
        firstname: this.familyMember.first_name,
        lastname: this.familyMember.last_name,
        gender: this.familyMember.gender,
        password: this.familyMember.password,
        phoneCode: this.familyMember.phone_isd,
        phoneNumber: this.familyMember.phone_number,
        email: this.familyMember.email,
        streetName: this.familyMember.street,
        streetNumber: this.familyMember.street_num,
        city: this.familyMember.city,
        postCode: this.familyMember.postcode,
        country: this.familyMember.country,
        askForChange: this.familyMember.can_ask,
        buyAGoods: this.familyMember.can_book,
        buyAVisits: this.familyMember.can_buy,
        isChild: true,
      });

      if (this.familyMember.can_buy && this.familyMember.can_book && this.familyMember.can_ask) {
        this.allPermissions = true
      }

      if (this.familyMember.profile_pic) {
        this.profilePicture = this.familyMember.profile_pic;
      }
    }

    onFileUpload(data) {
      this.uploadingFiles = data.files;
      this.preview = data.preview;      
  
      const fileList: FileList = data.files;
      const file = fileList[0];
      // this.fd.append('profile_pic', file, file.name);
      this.updatedProfilePicture = file;  
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

    alertDialog(): void {
      var width = '100%';
      if (!this.appSize.getIsMobileResolution()) {
        width = '40%';
      } else {
        width = '100%';
      }
  
      const dialogRef = this.dialog.open(AlertModalComponent, {
        width: width,
        data: {
          type: 'border',
          title: 'Update Successful',
          subTitle: 'Family Member Updated',
          buttonText: 'OK',
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(result)
      });
    }

    updateMember() {
      let params= {
        "username": this.newMemberForm.value.userName,
        "email": this.newMemberForm.value.email,
        "gender": this.newMemberForm.value.gender,
        "first_name": this.newMemberForm.value.firstname,
        "last_name": this.newMemberForm.value.lastname,
        "is_verified": true,
        "is_physical": true,
        "profile_pic": this.updatedProfilePicture,
        "street": this.newMemberForm.value.streetName,
        "street_num": this.newMemberForm.value.streetNumber,
        "city": this.newMemberForm.value.city,
        "country": this.newMemberForm.value.country,
        "postcode": this.newMemberForm.value.postCode,
        "phone_isd": this.newMemberForm.value.phoneCode,
        "phone_number": this.newMemberForm.value.phoneNumber,
        "is_child": true,
        "parent_user": this.userService.getUser().user_details.id,
        "can_buy": this.newMemberForm.value.buyAGoods,
        "can_book": this.newMemberForm.value.buyAVisits,
        "can_ask": this.newMemberForm.value.askForChange,
      }
      
      if (this.newMemberForm.valid) {
        this.dashboardService.editFamilyMember(this.familyMember.id, params).subscribe(res => {
          console.log(res);

          if (res) {
            this.alertDialog();
          }
        });
      } else {
        console.log('Form is not completely filled up');
      }
    }

    deleteFamilyMember() {
      this.dashboardService.deleteFamilyMember(this.familyMember.id).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/dashboard/main');
      })
    }

}
