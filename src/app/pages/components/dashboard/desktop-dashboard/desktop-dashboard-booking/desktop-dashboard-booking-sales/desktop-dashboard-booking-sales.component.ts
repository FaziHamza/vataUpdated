import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ApiService, UserService } from 'src/app/core';
import { BookProductService } from 'src/app/pages/components/book-product/book-product.service';
import { DashboardService } from '../../../dashboard.service';

@Component({
  selector: 'app-desktop-dashboard-booking-sales',
  templateUrl: './desktop-dashboard-booking-sales.component.html',
  styleUrls: ['./desktop-dashboard-booking-sales.component.scss']
})
export class DesktopDashboardBookingSalesComponent implements OnInit {
  clientForm: FormGroup;
  editSummaryForm: FormGroup;
  clientDetail: any;
  previousHistory: any;
  currentHistory: any;
  upcomingHistory: any;
  summaryData: any;
  addSummaryData: any;
  checkClient: boolean = true;
  shopId;
  services;
  removeSummary;
  formType;
  allClients: any;
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private bookProductService: BookProductService,
    private userService: UserService,
    private fb: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.getShopId();
    this.formClient();
    this.formEditSummary();
    this.getClientData();
    this.onChanges();
  }
  getShopId() {
    this.shopId = this.userService.getUser().shop_details.id;
    this.getServicesByCategory();
  }
  resetClient() {
    this.clientForm.setValue({
      clientName: '',
    });
    this.clientDetail = {};
  }
  formClient() {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      booking_options: [true],
    });
  }
  getAllClients() {
    this.dashboardService.getClients(this.shopId).subscribe(res => {
      this.allClients = res;
      console.log(this.allClients);
    })
  }
  formEditSummary() {
    this.editSummaryForm = this.fb.group({
      serviceName: ['', Validators.required],
      date: ['', Validators.required],
      timeFrom: ['', Validators.required],
      timeTo: ['', Validators.required],
    });
  }

  getClientData() {
    let param = {
      client_name: this.clientForm.value.clientName,
    }
    if (this.clientForm.invalid) {
      return;
    }

    this.dashboardService.postOfflineQuickBookingClient(param).subscribe(res => {
      debugger
      this.clientDetail = res;
      this.getMyHistory();
    });
  }

  getMyHistory() {
    let current = new Date();
    var date = moment(current).format('YYYY-MM-DD');

    let param = {
      client: this.clientDetail.id,
      date: date,
    }

    this.dashboardService.postOfflineMyHistoryUpcoming(param).subscribe(res => {
      debugger
      if (res.status = "Success")
        this.upcomingHistory = res.booking_data;
    });
    this.dashboardService.postOfflineMyHistoryCurrent(param).subscribe(res => {
      debugger
      this.currentHistory = res.booking_data;
    });
    this.dashboardService.postOfflineMyHistoryPrevious(param).subscribe(res => {
      debugger
      this.previousHistory = res.booking_data;
    });
  }
  getServicesByCategory() {

    this.bookProductService
      .getServicesByCategory(this.shopId)
      .subscribe((response) => {
        debugger
        console.log("services by category", response);
        if (response.Status == "Success") {
          this.services = response.data;
        } else {
          // TODO
          // Toast ?
        }
      });
  }

  resetSummaryForm() {
    this.addSummaryData = {};
    this.editSummaryForm.setValue({
      serviceName: '',
      date: '',
      timeFrom: '',
      timeTo: '',
    });
    this.formType = '';
  }
  addUpdateSummary(summary, type) {
    debugger
    this.formType = type;
    this.addSummaryData = summary;
    if (this.formType == 'add') {
      this.editSummaryForm.setValue({
        serviceName: this.addSummaryData.service_name,
        date: '',
        timeFrom: '',
        timeTo: '',
      });
    } else {
      this.editSummaryForm.setValue({
        serviceName: this.addSummaryData.service_name,
        date: this.addSummaryData?.book_date,
        timeFrom: this.addSummaryData?.from_time,
        timeTo: this.addSummaryData?.to_time,
      });
    }
  }
  saveServices() {
    let date = moment(this.editSummaryForm.value.date).format('YYYY-MM-DD');
    if (this.formType == 'update') {

      let param = {
        "service": this.addSummaryData.id,
        "member": this.addSummaryData.member,
        "book_date": date,
        "from_time": this.editSummaryForm.value.timeFrom,
        "to_time": this.editSummaryForm.value.timeTo,
        "client": this.clientDetail.id,
        "cancel": false
      }
      if (this.editSummaryForm.valid) {
        this.dashboardService.postOfflineModifiedService(param).subscribe(res => {
          this.resetSummaryForm();
          if (res.status == "Success") {
            this.toastrService.success("Information update successfully!", "Success");
            var parav1 = {
              "client": this.clientDetail.id,
            }
            this.dashboardService.postOfflineOncart(parav1).subscribe(resv1 => {
              this.summaryData = resv1;
            });
          }
        });
      }
    }
    else {

      let param = {
        "service": this.addSummaryData.id,
        "member": this.addSummaryData.members[0].id,
        "book_date": date,
        "from_time": this.editSummaryForm.value.timeFrom,
        "to_time": this.editSummaryForm.value.timeTo,
        "client": this.clientDetail?.id,
      }
      if (this.editSummaryForm.valid) {
        this.dashboardService.postOfflineAddService(param).subscribe(res => {
          this.resetSummaryForm();
          if (res.status == "Success") {
            this.toastrService.success("Information save successfully!", "Success");
            var parav1 = {
              "client": this.clientDetail.id,
            }
            this.dashboardService.postOfflineOncart(parav1).subscribe(resv1 => {
              this.summaryData = resv1;
            });
          }
        });
      }
    }
  }
  removeServices() {
    this.dashboardService.postOfflineDeleteService(this.clientDetail.id, this.addSummaryData.id).subscribe(res => {
      if (res.status == "Success") {
        this.resetSummaryForm();
        this.toastrService.success("Information save successfully!", "Success");
        var parav1 = {
          "client": this.clientDetail.id,
        }
        this.dashboardService.postOfflineOncart(parav1).subscribe(resv1 => {
          this.summaryData = resv1;
        });
      }
    });
  }

  applydiscount() {
    let param = {
      "client": "480e138b-6b66-4e43-9a2c-9447b8d7e2a0",
      "value": 10
    }
    debugger
    this.dashboardService.postOfflineApplyDiscount(param).subscribe(res => {

      console.log("Apply Discount" + res);
    });
  }
  applyTipCash() {
    let param = {
      "client": "480e138b-6b66-4e43-9a2c-9447b8d7e2a0",
      "value": 10
    }
    debugger
    this.dashboardService.postOfflineTipCash(param).subscribe(res => {

      console.log("Apply Tip Cash" + res);
    });
  }
  applyTipPercent() {
    let param = {
      "client": "480e138b-6b66-4e43-9a2c-9447b8d7e2a0",
      "value": 10
    }
    debugger
    this.dashboardService.postOfflineTipPercent(param).subscribe(res => {

      console.log("Apply Tip Percent" + res);
    });
  }
  onChanges() {
    this.clientForm.get('booking_options').valueChanges.subscribe(option => {
      if (option === false) {
        // this.clientForm.get("clientName").disable();
        this.checkClient = false;
      } else {
        // this.clientForm.get("clientName").enable();
        this.checkClient = true
      }
      this.resetClient();
    });
  }

}
