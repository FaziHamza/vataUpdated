import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookProductService } from '../../book-product.service';
import { AddServiceComponent } from 'src/app/shared/components/add-service/add-service.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { CheckoutFeesToPayComponent } from 'src/app/shared/components/checkout-fees-to-pay/checkout-fees-to-pay.component';

@Component({
  selector: 'app-desktop-make-booking',
  templateUrl: './desktop-make-booking.component.html',
  styleUrls: ['./desktop-make-booking.component.scss']
})
export class DesktopMakeBookingComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  shopId;
  serviceId;
  promoCode;
  shopDetails;
  services;
  servicesList;
  timingDetails;
  selectedService;
  servicebtnVisible : boolean = false;
  selectedServicePreferredDateAndTime = { preferredDate: null, preferredTiming: '' };
  selectedServiceIndex;
  dialogRef;
  staffMembers = [];
  constructor(  private userService: UserService,   
    private toastrService:ToastrService,
     private activeRoute: ActivatedRoute,
      private bookProductService: BookProductService, 
      private dialog: MatDialog) { }

  ngOnInit() {
    this.identifyBookingType();
    this.getData();
  }

  serviceSelected(index) {
    this.servicebtnVisible = true;
    this.selectedService = this.services[index];
    this.selectedServiceIndex = index;
    this.updateDataSentToChild();
  }

  updateDataSentToChild() {
    const newValues = { preferredDate: this.selectedService.preferredDate, preferredTiming: this.selectedService.preferredTiming };
    this.selectedServicePreferredDateAndTime = {...newValues};
  }

  identifyBookingType() {
    this.subscriptions.push(
    this.activeRoute.parent.params.subscribe(params => {
      this.shopId = params['id'];
    }))
    this.subscriptions.push(
    this.activeRoute.params.subscribe(params => {
      if (params['serviceId']) {
        this.serviceId = params['serviceId'];
      }
    }))
  }

  getData() {
    this.subscriptions.push(
    this.bookProductService.getShopDetails(this.shopId).subscribe((response) => {
      if (response.Status == 'Success') {
        
        this.shopDetails = response.data;
        this.onCart();
        // this.prepareData();
      }
    }))
  }

  prepareData() {
    
    if (this.shopId) {
      this.subscriptions.push(
      this.bookProductService.getServiceDetailByShop(this.shopId).subscribe((response) => {
       
        if (response) {
          this.services = response;
          this.services.forEach((service) => service.member = "Any Available")
        }
      }))
      // this.bookProductService.getServiceDetails(this.serviceId).subscribe((response) => {
      //   if (response) {
      //     this.services = response;
      //     this.services.forEach((service) => service.member = "Any Available")
      //   }
      // })
    } else {
      this.subscriptions.push(
      this.bookProductService.getServicesByCategory(this.shopId).subscribe((response) => {
        if (response.Status == "Success") {
          response.data.forEach((category) => {
            this.services = this.services.concat(category.services);
            this.services.forEach((service) => service.member = "Any Available")
          })
        } else {
          // TODO 
          // Toast ?
        }
      }))
    }
  }

  calculateTotal() {
    let total = 0;
    if(this.services !=undefined){
      this.services.forEach((service) => {
        if(service.total !=undefined)
        total = total + service.total;
        else
        total = total + service.price;
      })
    }
    

    return total;
  }

  removeService(index) {
    this.deleteService(index);
    this.services.splice(index, 1);
    this.selectedServiceIndex = -1;
    // this.selectedService.preferredDate = null;
    // this.selectedService.preferredTime = "";
    // this.updateDataSentToChild();
    this.selectedService = null;
    this.servicebtnVisible= false;

  }

  dateSelected(dateEvent) {
    
    if (this.selectedService) {
      let selectedDate = new Date(dateEvent);
      // This is done because the datepicker returns the wrong month
      selectedDate.setMonth(selectedDate.getMonth() + 1);
      let day = selectedDate.getDay();
      this.setShopTimingsForDay(day);
      this.selectedService.preferredDate = selectedDate;
      this.updateServicesArray();
      this.updateDataSentToChild();
    }
  }

  timeSelected(timeEvent) {
    if (this.selectedService) {
      this.selectedService.preferredTiming = timeEvent;
      this.updateServicesArray();
    }
  }

  updateServicesArray() {
    const occurence = this.services[this.selectedServiceIndex];
    if (occurence) {
      this.services.splice(this.services.indexOf(occurence), 1, this.selectedService);
    }
  }

  setShopTimingsForDay(day) {
    let timings = this.shopDetails.timings.find(timing => timing.day == day);
    if (timings) {
      this.timingDetails = {
        startTime: timings.open_times,
        endTime: timings.closed_times
      }
    } else {
      this.timingDetails = {};
    }
    
  }

  addAnotherService() {
    
    let allServices = [];
    this.subscriptions.push(
    this.bookProductService.getServicesByCategory(this.shopId).subscribe((response) => {
      if (response.Status == "Success") {
        response.data.forEach((category) => {
          allServices = allServices.concat(category.services);
        })
        this.openAddServiceDialog(allServices);
      }
    }))
  }

    openAddServiceDialog(allServices) {
      this.dialogRef = this.dialog.open(AddServiceComponent, {
        width: "80%",
        data: {
          type: 'border',
          title: 'Add Another Service',
          services: allServices
        }
      });
      this.subscriptions.push(
      this.dialogRef.componentInstance.onFormSubmit.subscribe((data) => {
        this.dialogRef.close();
        
        const newService = {...data};
        this.services.push(newService)
      }))
    }
    confirmPay(){
      if(!this.services){
        this.toastrService.error("Please select at least one service!", "Error");
        return false;
      }
      debugger
      let obj ={
        "total_payment": this.servicesList.total_payment,
        "paid": true,
        "stripe_pay_intent": this.servicesList.stripe_pay_intent,
        "stripe_fee_percent": this.servicesList.stripe_fee_percent,
        "user_id": this.userService.getUser().user_details.id,
        "booking_status": this.servicesList.booking_status.id,
        "promo_code": this.promoCode,
        "card_id": this.servicesList.id

      }
      console.log(this.promoCode);
      this.subscriptions.push(
      this.bookProductService.checkout(obj).subscribe((res=>{
        this.toastrService.success("Information save successfully!", "Success");
        

      })))
    }
    clearForm(){
      this.services=[]
      this.servicesList = [];
    }
    addService(){
      
      if(this.selectedService.preferredTiming == '' && this.selectedService.preferredTiming == undefined)
      {
        this.toastrService.error("Please select from time first!", "Error");
        return false;
      }

      let times=[];
      let startTime = moment(this.selectedService.preferredTiming, "HH:mm:ss");
      let toTime= startTime.add(1,'hours');
      times.push(toTime.format("HH:mm"));
      let date = moment(this.selectedService.preferredDate).format('YYYY-MM-DD');
      let param = {
        "service": this.selectedService.id,
        "member": this.selectedService.members[0].id,
        "book_date":date,
        "from_time": this.selectedService.preferredTiming,
        "to_time": times[0],
        "price": this.selectedService.total,
      }
      this.subscriptions.push(
      this.bookProductService.postOnlineAddService(param).subscribe(res => {
        
        if (res.status == "Success") {
          this.toastrService.success("Information save successfully!", "Success");
          this.services = res.service_items
          this.servicesList = res
        }
      }));
    }
    onCart(){
      this.subscriptions.push(
      this.bookProductService.postOnlineOnCart().subscribe(res => {
        this.services = res.service_items
        this.servicesList = res
      }));
    }
    deleteService(index){
      let serviceId= this.services[index].service;
      this.bookProductService.postOnlineDeleteService(serviceId).subscribe(res => {
        
        if(res.status == 'Success')
        this.toastrService.success("Information delete successfully!", "Success");
       this.onCart();
      });
    }

  // Move to utils if possible
  // getDayNameFromDayNumber(dayNumber) {
  //   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   var dayName = days[dayNumber];

  //   return dayName;
  // }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutFeesToPayComponent, {
      width: '30%',
      data: {
        name: 'filter modal'
      },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
