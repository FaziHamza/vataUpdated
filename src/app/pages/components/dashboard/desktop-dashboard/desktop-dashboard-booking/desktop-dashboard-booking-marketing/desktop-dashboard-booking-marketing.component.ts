import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-booking-marketing',
  templateUrl: './desktop-dashboard-booking-marketing.component.html',
  styleUrls: ['./desktop-dashboard-booking-marketing.component.scss']
})
export class DesktopDashboardBookingMarketingComponent implements OnInit {
  
  pushOnBookingForm: FormGroup;
  lastMinDiscountForm: FormGroup;
  happyHoursForm: FormGroup;
  flashSaleForm: FormGroup;

  serviceCategory: any;
  servicesByCategory: any;
  allServices: any;
  categorizedServices: any = [];
  fees: any = 7;
  pushType: any = '';
  selectedServices: any;
  selectedDays: any = [];
  happyHourDiscountSelectDays: any;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.pushOnBookingFormInIt();
    this.postLastMinDiscountFormInIt();
    this.happyHoursFormInIt();
    this.flashSaleFormInIt();
    this.getAllServices();
    this.getServiceCategory();
    this.getHappyHourDiscountSelectDays();
  }

  pushOnBookingFormInIt() {
    this.pushOnBookingForm = this.fb.group({
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      description: ['', Validators.required],
      pushHomeBooking: [false, Validators.required],
      pushBestBooking: [false, Validators.required],
      payPerForNear: [false, Validators.required],
    });
  }

  postLastMinDiscountFormInIt() {
    this.lastMinDiscountForm = this.fb.group({
      discountPercent: ['', Validators.required],
      timeLimit: ['', Validators.required],
    });
  }

  happyHoursFormInIt() {
    this.happyHoursForm = this.fb.group({
      discountPercent: ['', Validators.required],
    });
  }

  flashSaleFormInIt() {
    this.flashSaleForm = this.fb.group({
      discountPercent: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  // getting services from child component
  getServices(services) {
    this.selectedServices = services;
    // console.log("selected services from parent", this.selectedServices);
    
  }

  getServiceCategory() {
    let shopId = this.userService.getUser().shop_details.id;

    this.dashboardService.getServiceCategory(shopId).subscribe(res => {
      this.serviceCategory = res; 
      // console.log("serviceCategory  > Marketing", res);

      this.serviceCategory.forEach(element => {
        this.getServicesByCategory(element.name);
      });

    })
  }

  getServicesByCategory(categoryName) {
    let shopId = this.userService.getUser().shop_details.id;

    this.dashboardService.getAddService(shopId, categoryName).subscribe(
      (res) => {
        this.servicesByCategory = res;
        // console.log("servicesByCategory > Marketing", this.servicesByCategory);

        this.categorizedServices.push({name: categoryName, services: this.servicesByCategory});
        // console.log("categorizedServices > Marketing", this.categorizedServices);
      },
      (error) => { console.log(error); }
    );
  }

  getAllServices() {
    let shopId = this.userService.getUser().shop_details.id;
    let categoryName = '';

    this.dashboardService.getAddService(shopId, categoryName).subscribe(
      (res) => {
        this.allServices = res;
        // console.log("AllServices > Marketing", this.servicesByCategory);
      },
      (error) => { console.log(error); }
    );
  }

  postPushBooking() {
    let shopId = this.userService.getUser().shop_details.id;

    let date = new Date(this.pushOnBookingForm.value.startDate);
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    var formData = new FormData();
    formData.append('shop_id', shopId);
    formData.append('desc', this.pushOnBookingForm.value.description);
    formData.append('select_duration', this.pushOnBookingForm.value.duration);
    formData.append('start_date', formattedDate);
    formData.append('desc', this.pushOnBookingForm.value.description);
    formData.append('pushTypes', this.pushType);
    formData.append('fees', this.fees);
    formData.append('service', JSON.stringify(this.selectedServices));
    
    this.dashboardService.postPushBooking(formData).subscribe(res => {
      console.log(res);

      if (res) {
        this.toastrService.success('Push On Home Successfully Added');
        this.pushOnBookingForm.reset();
      }
    })
  }

  changeSelectBox(event) {
    this.pushType = event.source.value;
    
    if (event.source.value == 'Push Home Booking') {
      this.pushOnBookingForm.patchValue({
        pushHomeBooking: true,
        pushBestBooking: false,
        payPerForNear: false
      });
    }
    if (event.source.value == 'Push Best Booking') {
      this.pushOnBookingForm.patchValue({
        pushHomeBooking: false,
        pushBestBooking: true,
        payPerForNear: false
      });
    }
    if (event.source.value == 'Pay Per For Near') {
      this.pushOnBookingForm.patchValue({
        pushHomeBooking: false,
        pushBestBooking: false,
        payPerForNear: true
      });
    }
  }

  postLastMinDiscount() {
    let shopId = this.userService.getUser().shop_details.id;

    var formData = new FormData();
    formData.append('shop_id', shopId);
    formData.append('service', JSON.stringify(this.selectedServices));
    formData.append('discount', this.lastMinDiscountForm.value.discountPercent);
    formData.append('enable_limit', this.lastMinDiscountForm.value.timeLimit);
    
    this.dashboardService.postLastMinuteDiscount(formData).subscribe(res => {
      console.log(res);

      if (res) {
        this.toastrService.success('Last Minute Discount Successfully Added');
        this.lastMinDiscountForm.reset();
      }
    });
  }

  getHappyHourDiscountSelectDays() {
    this.dashboardService.getHappyHourDiscountSelectDay().subscribe(
      (res) => {
        this.happyHourDiscountSelectDays = res;
        console.log("happyHourDiscountSelectDays > Marketing", this.happyHourDiscountSelectDays);
      },
      (error) => { console.log(error); }
    );
  }

  selectDays(day) {
    if (this.selectedDays.includes(day)) {
      this.selectedDays = this.selectedDays.filter(item => item != day);
    } else {
      this.selectedDays.push(day);
    }
    // console.log(this.selectedDays);
  }

  postHappyHourDiscount(){
    let shopId = this.userService.getUser().shop_details.id;

    var formData = new FormData();
    formData.append('shop_id', shopId);
    formData.append('service', JSON.stringify(this.selectedServices));
    formData.append('durations', JSON.stringify(this.selectedDays));
    formData.append('discount', this.happyHoursForm.value.discountPercent);

    this.dashboardService.postHappyHourDiscount(formData).subscribe(res => {
      console.log(res);

      if (res) {
        this.toastrService.success('Happy Hour Discount Successfully Added');
        this.happyHoursForm.reset();
      }
    })
  }

  postFlashSale(){
    let shopId = this.userService.getUser().shop_details.id;

    var formData = new FormData();
    formData.append('shop_id', shopId);
    formData.append('service', JSON.stringify(this.selectedServices));
    formData.append('durations', JSON.stringify(this.selectedDays));
    formData.append('discount', this.flashSaleForm.value.discountPercent);
    formData.append('end_time', this.flashSaleForm.value.endTime);

    this.dashboardService.postFlashSale(formData).subscribe(res => {
      console.log(res);

      if (res) {
        this.toastrService.success('Flash Sale Successfully Added');
        this.happyHoursForm.reset();
      }
    })
  }

}
