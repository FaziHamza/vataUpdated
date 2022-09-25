import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desktop-dashboard-all-services',
  templateUrl: './desktop-dashboard-all-services.component.html',
  styleUrls: ['./desktop-dashboard-all-services.component.scss']
})
export class DesktopDashboardAllServicesComponent implements OnInit {

  @Input('allServices') allServices: any;
  @Input('categorizedServices') categorizedServices: any;
  @Output() selectServices = new EventEmitter<any>();

  selectedServices: any = [];
  selectAll: boolean = false;

  constructor() { }

  ngOnInit() {
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
