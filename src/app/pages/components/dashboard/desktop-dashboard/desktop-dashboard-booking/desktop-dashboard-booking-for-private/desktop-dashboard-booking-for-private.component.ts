import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as moment from 'moment';
import Calendar from 'tui-calendar';

@Component({
  selector: 'app-desktop-dashboard-booking-for-private',
  templateUrl: './desktop-dashboard-booking-for-private.component.html',
  styleUrls: ['./desktop-dashboard-booking-for-private.component.scss']
})

export class DesktopDashboardBookingForPrivateComponent implements OnInit {
  @ViewChild(MatCalendar, {static: true}) _datePicker: MatCalendar<Moment>;
  currentHistory: any;
  datedHistory: any;
  privateSelectedDate = moment();
  dateSelected: EventEmitter<Moment> = new EventEmitter();
  cancel: boolean = false;
  finish: boolean = false;
  today: any = new Date();
  calendar: Calendar;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    
    this.calendar = this.dashboardService.getCalendar('#example-calendar1');
    this.privateCurrentHistory();
    this.calendar.setOptions({
      usageStatistics: false,
      defaultView: 'day',
      isReadOnly: true,
    });
    
    this.datedData(new Date());
 
    
    // this.calendar.clear();

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
  dateChanged(event) {
    var date = moment(event).format('YYYY-MM-DD');
    this.today = date;
    this.datedData(date);
    // this._datePicker.activeDate = this.privateSelectedDate;
    // this.dateSelected.emit(this.privateSelectedDate);
    // if (this._datePicker) {
    //   this._datePicker.selectedChange.subscribe(x => {
        
       
    //   });
    // }
  }

}
