import { Component, OnInit, Input, Output,OnDestroy, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-dashboard-booking-settings',
  templateUrl: './desktop-dashboard-booking-settings.component.html',
  styleUrls: ['./desktop-dashboard-booking-settings.component.scss']
})
export class DesktopDashboardBookingSettingsComponent implements OnInit,OnDestroy  {
  subscriptions: Array<Subscription> = [];

  @Input('allServices') allServices: any;
  @Input('categorizedServices') categorizedServices: any;
  @Output() selectServices = new EventEmitter<any>();
  
  messageTemplateSettingForm: FormGroup;
  staffCommissionsSettingForm: FormGroup;

  basicSettings: any;
  copied: boolean = false;
  serviceCategory: any;
  servicesByCategory: any;
  selectedServices: any = [];
  selectAll: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.messageTemplateSettingFormInit();
    this.staffCommissionsSettingFormInit();
    this.getBasicSettings();
    this.getServiceCategory();
  }

  messageTemplateSettingFormInit() {
    this.messageTemplateSettingForm = this.fb.group({
      clientBookAppointment: ['', Validators.required],
      confirmationMode: ['', Validators.required],
      previewMessage: ['', Validators.required],
      emailFooter: ['', Validators.required],
    });
  }

  staffCommissionsSettingFormInit() {
    this.staffCommissionsSettingForm = this.fb.group({
      defaultCommissions: ['', Validators.required],
    });
  }

  getBasicSettings() {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getBasicSettings(shopId).subscribe( res => {
      this.basicSettings = res;

      console.log("BasicSettings", this.basicSettings);
    }))
  }

  postBasicSettings() {
    let shopId = this.userService.getUser().shop_details.id;

    let messageTem = {
      emailFooter: this.messageTemplateSettingForm.value.emailFooter,
      previewMessage: this.messageTemplateSettingForm.value.previewMessage,
    }

    var formData = new FormData();
    formData.append('shop_id', shopId);
    formData.append('lead_time', this.messageTemplateSettingForm.value.clientBookAppointment);
    formData.append('confirmation_mode', this.messageTemplateSettingForm.value.confirmationMode);
    formData.append('message_template', JSON.stringify(messageTem));
    this.subscriptions.push(
    this.dashboardService.postBasicSettings(formData).subscribe(res => {
      // console.log(res);

      if (res) {
        this.toastrService.success('Basic Settings Successfully Added');
        this.messageTemplateSettingForm.reset();
      }
    }));
  }

  copyText(text) {
    navigator.clipboard.writeText(text);
    this.copied = !this.copied;
    console.log(text + ' > text copied');
  }

  getServiceCategory() {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getServiceCategory(shopId).subscribe(res => {
      // console.log("serviceCategory", res);
      this.serviceCategory = res; 

      this.getServicesByCategory(this.serviceCategory[0].name);
    }))
  }

  getServicesByCategory(categoryName) {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getAddService(shopId, categoryName).subscribe(
      res => {
        this.servicesByCategory = res;
        // console.log("servicesByCategory ", this.servicesByCategory);
      },
      error => { console.log(error); }
    ));
  }

  selectService(service_id) {
    if (this.selectedServices.includes(service_id)) {
      this.selectedServices = this.selectedServices.filter(item => item != service_id);
    } else {
      this.selectedServices.push(service_id);
    }

    // sending services to child component
    this.selectServices.emit(this.selectedServices);
    // console.log(this.selectedServices);
  }

  selectAllServices(services) {
    this.selectAll = !this.selectAll;

    if (services == 'all') {
      this.allServices.forEach(element => {
        this.selectService(element.id)
      });
    }
    else {
      services.services.forEach(element => {
        this.selectService(element.id)
      });
    }

    // sending services to child component
    this.selectServices.emit(this.selectedServices);
    // console.log(this.selectedServices);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
