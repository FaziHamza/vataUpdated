import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-booking-company-add-edit-service',
  templateUrl: './desktop-booking-company-add-edit-service.component.html',
  styleUrls: ['./desktop-booking-company-add-edit-service.component.scss']
})
export class DesktopBookingCompanyAddEditServiceComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  addEditServiceBookingForm: FormGroup;
  serviceCategories: any;
  members: any;
  formType: any = history.state.data;
  membersList:any = [];
  selectAll: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addEditServiceBookingFormInIt();
    this.getServiceCategory();
    this.getMembers();
  }

  addEditServiceBookingFormInIt() {
    this.addEditServiceBookingForm = this.fb.group({
      serviceName: ['', Validators.required],
      serviceCategory: ['', Validators.required],
      paddingTimeType: ['', Validators.required],
      duration_hours: ['', Validators.required],
      duration_mins: ['', Validators.required],
      price: ['', Validators.required],
      duration_advanced: ['', Validators.required],
      mins_advanced: ['', Validators.required],
      parallelClient: ['', Validators.required],
      processingDuringHours: ['', Validators.required],
      processingDuringMins: ['', Validators.required],
      processingAfterHours: ['', Validators.required],
      processingAfterMins: ['', Validators.required],
      intervalHours: ['', Validators.required],
      intervalMins: ['', Validators.required],
      tax: ['', Validators.required],
      serviceDescription: ['', Validators.required],
      noteForClient: ['', Validators.required],
    });
  }

  getServiceCategory() {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getServiceCategory(shopId).subscribe(res => {
      this.serviceCategories = res; 
    }))
  }

  postAddService() {
    var formData = new FormData();

    formData.append('shop_id', this.userService.getUser().shop_details.id);
    formData.append('service_name', this.addEditServiceBookingForm.value.serviceName);
    formData.append('price', this.addEditServiceBookingForm.value.price);
    formData.append('description', this.addEditServiceBookingForm.value.serviceDescription);
    formData.append('note', this.addEditServiceBookingForm.value.noteForClient);
    formData.append('parallel', this.addEditServiceBookingForm.value.parallelClient);
    formData.append('category', this.addEditServiceBookingForm.value.serviceCategory);
    formData.append('tax_rate', this.addEditServiceBookingForm.value.tax);
    formData.append('rate_unit', this.addEditServiceBookingForm.value.price);
    formData.append('processing_time_dservice', this.addEditServiceBookingForm.value.processingDuringHours + ':' + this.addEditServiceBookingForm.value.processingDuringMins);
    formData.append('proccessing_time_aservice', this.addEditServiceBookingForm.value.processingAfterHours + ':' + this.addEditServiceBookingForm.value.processingAfterMins);
    formData.append('padding_time_type', this.addEditServiceBookingForm.value.paddingTimeType);
    formData.append('padding_time', this.addEditServiceBookingForm.value.duration_advanced + ':' + this.addEditServiceBookingForm.value.mins_advanced);
    formData.append('interval', this.addEditServiceBookingForm.value.intervalHours + ':' + this.addEditServiceBookingForm.value.intervalMins);
    formData.append('duration', this.addEditServiceBookingForm.value.duration_hours + ':' + this.addEditServiceBookingForm.value.duration_mins);
    formData.append('members', JSON.stringify(this.membersList));
    this.subscriptions.push(
    this.apiService.post(ApiEndPoints.DASHBOARD.POST_ADD_SERVICE, formData).subscribe(res => {
      // console.log(res);
      
      if(res) {
        this.toastr.success('Service Added Successfully.');
        this.addEditServiceBookingForm.reset();
        this.router.navigateByUrl('/dashboard/dashboard-booking/company-info/');
      }
    }));
  }

  getMembers() {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getAddMember(shopId).subscribe(res => {
      this.members = res; 
      console.log("Members", this.members);
    }))
  }

  selectMember(id) {
    if(this.membersList.includes(id) == false) {
      this.membersList.push(id);
    }
    else {
      this.membersList = this.membersList.filter(item => item !== id)
    }
    console.log(this.membersList);
  }

  selectAllMembers() {
    this.membersList = [];
    this.selectAll = !this.selectAll;

    if (this.selectAll == true) {
      this.members.forEach(element => {
        this.membersList.push(element.id);
      });
    } else {
      this.membersList = [];
    }

    console.log(this.membersList);    
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
