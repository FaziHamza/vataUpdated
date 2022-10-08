import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookProductService } from '../../book-product.service';
import { AddServiceComponent } from 'src/app/shared/components/add-service/add-service.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-make-booking',
  templateUrl: './desktop-make-booking.component.html',
  styleUrls: ['./desktop-make-booking.component.scss']
})
export class DesktopMakeBookingComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  shopId;
  serviceId;
  shopDetails;
  services = [];
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
    this.activeRoute.parent.params.subscribe(params => {
      this.shopId = params['id'];
    })

    this.activeRoute.params.subscribe(params => {
      if (params['serviceId']) {
        this.serviceId = params['serviceId'];
      }
    })
  }

  getData() {
    this.bookProductService.getShopDetails(this.shopId).subscribe((response) => {
      if (response.Status == 'Success') {
        debugger
        this.shopDetails = response.data;
        // this.prepareData();
      }
    })
  }

  prepareData() {
    debugger
    if (this.shopId) {
      this.bookProductService.getServiceDetailByShop(this.shopId).subscribe((response) => {
       debugger
        if (response) {
          this.services = response;
          this.services.forEach((service) => service.member = "Any Available")
        }
      })
      // this.bookProductService.getServiceDetails(this.serviceId).subscribe((response) => {
      //   if (response) {
      //     this.services = response;
      //     this.services.forEach((service) => service.member = "Any Available")
      //   }
      // })
    } else {
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
      })
    }
  }

  calculateTotal() {
    let total = 0;
    this.services.forEach((service) => {
      total = total + service.total;
    })

    return total;
  }

  removeService(index) {
    this.services.splice(index, 1);
    this.selectedServiceIndex = -1;
    // this.selectedService.preferredDate = null;
    // this.selectedService.preferredTime = "";
    // this.updateDataSentToChild();
    this.selectedService = null;
    this.servicebtnVisible= false;

  }

  dateSelected(dateEvent) {
    debugger
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
    this.bookProductService.getServicesByCategory(this.shopId).subscribe((response) => {
      if (response.Status == "Success") {
        response.data.forEach((category) => {
          allServices = allServices.concat(category.services);
        })
        this.openAddServiceDialog(allServices);
      }
    })
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
  
      this.dialogRef.componentInstance.onFormSubmit.subscribe((data) => {
        this.dialogRef.close();
        debugger
        const newService = {...data};
        this.services.push(newService)
      })
    }
    confirmPay(){
      let obj ={
        "total_payment": this.calculateTotal(),
        "paid": true,
        "stripe_pay_intent": "",
        "stripe_fee_percent": 1,
        "user_id": this.userService.getUser().user_details.id,
        "booking_status": "paid",
        "promo_code": ""
      }
      
      this.bookProductService.checkout(obj).subscribe((res=>{
        

      }))
    }

    addService(){
      debugger
      let date = moment(this.services[0].preferredDate).format('YYYY-MM-DD');
      let param = {
        "service": this.selectedService.id,
        "member": this.selectedService.members[0].id,
        "book_date":date,
        "from_time": this.services[0].preferredTiming,
        "to_time": this.services[0].preferredTiming,
        "price": this.services[0].total,
      }
      this.bookProductService.postOnlineAddService(param).subscribe(res => {
        debugger
        if (res.status == "Success") {
          this.toastrService.success("Information save successfully!", "Success");
          this.onCart();
        }
      });
    }
    onCart(){
      this.bookProductService.postOnlineOnCart().subscribe(res => {
        debugger
        if (res.status == "Success") {
          // this.toastrService.success("Information save successfully!", "Success");
        }
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

}
