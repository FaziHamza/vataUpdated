import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../dashboard.service';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-edit-public-profile',
  templateUrl: './desktop-dashboard-edit-public-profile.component.html',
  styleUrls: ['./desktop-dashboard-edit-public-profile.component.scss']
})
export class DesktopDashboardEditPublicProfileComponent implements OnInit {

  editPublicForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    // private userService: UserService,
  ) { }

  ngOnInit() {
    this.editPublicForm = this.fb.group({
      nickName: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      streetName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

}
