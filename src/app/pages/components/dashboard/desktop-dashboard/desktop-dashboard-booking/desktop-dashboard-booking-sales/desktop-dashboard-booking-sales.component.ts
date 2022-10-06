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
  discountForm: FormGroup;
  tipForm: FormGroup;
  editSummaryForm: FormGroup;
  clientDetail: any;
  previousHistory: any;
  currentHistory: any;
  upcomingHistory: any;
  summaryData: any;
  summaryDataVisible: boolean = false;
  addSummaryData: any;
  visibleAddSummaryData: boolean = false;
  discountVisible: boolean = false;
  checkClient: boolean = true;
  applyTipVisible: boolean = false;
  shopId;
  services;
  removeSummary;
  formType;
  allClients: any;
  subTotal = 0;
  totalAmount = 0;
  currentDate: any = new Date();
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
    this.getAllClients();
    this.formDiscount();
    this.formTip();
    // this.onChanges();
  }
  getShopId() {
    this.shopId = this.userService.getUser().shop_details.id;
    this.getServicesByCategory();
  }
  resetClient() {
    this.clientForm.setValue({
      clientName: '',
      clientId: '',
      booking_options: this.checkClient,
    });
    this.clientDetail = {};
  }
  formClient() {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      clientId: [''],
      booking_options: [true],
    });
  }
  formDiscount() {
    this.discountForm = this.fb.group({
      discount: ['', Validators.required],
    });
  }
  resetDiscount(){
    this.discountForm.setValue({
      discount: '',
    });
  }
  resetTip(){
    this.tipForm.setValue({
      tipPercent: 0,
      tipAmount: 0,
    });
  }
  formTip() {
    this.tipForm = this.fb.group({
      tipPercent: [0, Validators.required],
      tipAmount: [0, Validators.required],
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
  clearPage(){
    this.resetDiscount();
    this.resetTip();
    this.summaryDataVisible=false;
    this.visibleAddSummaryData=false;
    this.applyTipVisible=false;
    this.discountVisible=false;
    this.subTotal = 0;
    this.totalAmount = 0;
  }
  getClientData() {
    
    this.clearPage();
    if (!this.checkClient) {
      this.getMyHistory(this.clientForm.value.clientId);
    } else {
      let param = {
        client_name: this.clientForm.value.clientName,
      }
      if (this.clientForm.valid) {
        this.dashboardService.postOfflineQuickBookingClient(param).subscribe(res => {
          
          this.clientDetail = res;
        });
      }
    }
  }
  calculateTotal(data){
    
    this.subTotal = 0;
    for (let index = 0; index < data.service_items.length; index++) {
      this.subTotal = this.subTotal + data.service_items[index].price;
    }
    this.totalAmount = this.subTotal - data.discount_amount - data.tip_amount
  }
  getMyHistory(id) {
    let current = new Date();
    var date = moment(current).format('YYYY-MM-DD');

    let param = {
      client: id,
      date: date,
    }

    this.dashboardService.postOfflineMyHistoryUpcoming(param).subscribe(res => {
      
      if (res.status = "Success")
        this.upcomingHistory = res.booking_data;
    });
    this.dashboardService.postOfflineMyHistoryCurrent(param).subscribe(res => {
      
      this.currentHistory = res.booking_data;
    });
    this.dashboardService.postOfflineMyHistoryPrevious(param).subscribe(res => {
      
      this.previousHistory = res.booking_data;
    });
  }
  getServicesByCategory() {

    this.bookProductService
      .getServicesByCategory(this.shopId)
      .subscribe((response) => {
        
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
    this.visibleAddSummaryData = false;
    this.addSummaryData = '';
    this.editSummaryForm.setValue({
      serviceName: '',
      date: '',
      timeFrom: '',
      timeTo: '',
    });
    this.formType = '';
  }
  addUpdateSummary(summary, type) {
    
    this.formType = type;
    this.addSummaryData = summary;
    this.visibleAddSummaryData = true;
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
        "service": this.addSummaryData.service,
        "member": this.addSummaryData.member,
        "book_date": date,
        "from_time": this.editSummaryForm.value.timeFrom,
        "to_time": this.editSummaryForm.value.timeTo,
        "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
        "cancel": false
      }
      if (this.editSummaryForm.valid) {
        this.dashboardService.postOfflineModifiedService(param).subscribe(res => {
          this.resetSummaryForm();
          if (res.status == "Success") {
            this.toastrService.success("Information update successfully!", "Success");
            this.onCart()
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
        "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,

      }
      if (this.editSummaryForm.valid) {
        this.dashboardService.postOfflineAddService(param).subscribe(res => {
          this.resetSummaryForm();
          if (res.status == "Success") {
            this.toastrService.success("Information save successfully!", "Success");
            this.onCart();
          }
        });
      }
    }
  }
  removeServices() {
    let id = !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id;
    this.dashboardService.postOfflineDeleteService(id, this.addSummaryData.service).subscribe(res => {
      if (res.status == "Success") {
        this.resetSummaryForm();
        this.toastrService.success("Information save successfully!", "Success");
        this.onCart();
      }
    });
  }
  onCart() {
    this.summaryDataVisible = true;
    var parav1 = {
      "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
    }
    this.dashboardService.postOfflineOncart(parav1).subscribe(resv1 => {
      this.summaryData = resv1;
     
      this.calculateTotal(this.summaryData);
    });
  }
  addDiscount() {
    this.discountVisible = true;
  }
  applydiscount() {
    let param = {
      "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
      "value": this.discountForm.value.discount
    }
    
    if (this.discountForm.valid) {
      this.dashboardService.postOfflineApplyDiscount(param).subscribe(res => {
        this.onCart();
        console.log("Apply Discount" + res);
        this.discountVisible = false;
      });
    }

  }
  getTip(id) {
    
    if (id.index == 4) {
      this.applyTipVisible = true;
    } else if (id.index == 0) {
      this.applyTipVisible = false;
    }
    else {
      this.tipForm.value.tipPercent = parseInt(id.tab.textLabel);
      this.applyTipVisible = false;
    }

  }
  applyTipCash() {
    let param = {
      "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
      "value": this.tipForm.value.tipAmount
    }
    
    this.dashboardService.postOfflineTipCash(param).subscribe(res => {
      this.onCart();
      console.log("Apply Tip Cash" + res);
    });
  }
  applyTipPercent() {
    let param = {
      "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
      "value": this.tipForm.value.tipPercent
    }
    
    this.dashboardService.postOfflineTipPercent(param).subscribe(res => {
      this.onCart();
      console.log("Apply Tip Percent" + res);
    });
  }
  onChanges() {
    
    this.checkClient = !this.checkClient;
    this.resetClient();
    // this.clientForm.get('booking_options').valueChanges.subscribe(option => {
    //   if (option === false) {
    //     // this.clientForm.get("clientName").disable();

    //   } else {
    //     // this.clientForm.get("clientName").enable();
    //     this.checkClient = true
    //   }
    //   this.resetClient();
    // });
  }
  SaveCart(){
    var parav1 = {
      "client": !this.checkClient ? this.clientForm.value.clientId : this.clientDetail.id,
      "total_payment": this.totalAmount,
      "sub_total": this.subTotal,
      "source_name": "",
      "paid": true,
      "due": true,
      "tip_percent": this.summaryData.tip_percent ,
      "tip_cash": this.tipForm.value.tipAmount ,
      "discount_percent": this.summaryData.discount_percent,
      "stripe_pay_intent": "",
      "booking_status": this.summaryData.booking_status.id
    }

    this.dashboardService.postOfflineConfirm(parav1).subscribe(resv1 => {
      this.toastrService.success("Information save successfully!","Success");
      this.clearPage();
    });
  }
}
