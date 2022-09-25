import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-dashboard-booking-for-private',
  templateUrl: './desktop-dashboard-booking-for-private.component.html',
  styleUrls: ['./desktop-dashboard-booking-for-private.component.scss']
})
export class DesktopDashboardBookingForPrivateComponent implements OnInit {

  currentHistory: any;
  datedHistory: any;
  cancel: boolean = false;
  finish: boolean = false;
  today: any = new Date();

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.privateCurrentHistory();
    this.datedData(new Date());
  }

  privateCurrentHistory() {
    let params = {
      limit: 20,
      offset: 0,
      user_book_services__user_id: '',
      finished: this.finish,
      cancel: this.cancel,
      get_date: '',
    }

    this.dashboardService.currentHistory(params.limit, params.offset, params.user_book_services__user_id, params.finished, params.cancel, params.get_date).subscribe(res => {
      this.currentHistory = res;
      console.log(this.currentHistory);
    })
  }

  cancelHistory() {
    this.cancel = true;
    this.finish = false;
    this.privateCurrentHistory();
  }

  finishHistory() {
    this.finish = true;
    this.cancel = false;
    this.privateCurrentHistory();
  }

  allHistory() {
    this.finish = false;
    this.cancel = false;
    this.privateCurrentHistory();
  }

  datedData(dateParam) {
    let date = new Date(dateParam);
    let formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    
    let params = {
      limit: 20,
      offset: 0,
      user_book_services__user_id: '',
      finished: false,
      cancel: false,
      get_date: formattedDate,
    }

    this.dashboardService.currentHistory(params.limit, params.offset, params.user_book_services__user_id, params.finished, params.cancel, params.get_date).subscribe(res => {
      this.datedHistory = res;
      console.log(this.datedHistory);
    })

  }

}
