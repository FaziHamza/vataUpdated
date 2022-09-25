import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataHoldingService } from '../../../../../../../shared/services/data-holding.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-desktop-booking-member-details',
  templateUrl: './desktop-booking-member-details.component.html',
  styleUrls: ['./desktop-booking-member-details.component.scss']
})
export class DesktopBookingMemberDetailsComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();
  @Input('memberData') dataMember: any;
  @Input('allServices') allServices: any;
  @Input('categorizedServices') categorizedServices: any;
  @Output() selectServices = new EventEmitter<any>();

  selectedServices: any = [];
  selectAll: boolean = false;

  constructor(
    private dataHolder: DataHoldingService,
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    console.log(this.dataMember);
  }

  onSelectType(type) {
    this.selectType.emit(type);
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

}
