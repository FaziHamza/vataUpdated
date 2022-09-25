import { Component, OnInit, ViewChild, Output, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as moment from 'moment';
import { NgxTuiCalendarComponent } from 'ngx-tui-calendar';
import { DashboardService } from '../../../../dashboard.service';
import Calendar from 'tui-calendar';

@Component({
  selector: 'app-desktop-booking-visits-stats',
  templateUrl: './desktop-booking-visits-stats.component.html',
  styleUrls: ['./desktop-booking-visits-stats.component.scss']
})
export class DesktopBookingVisitsStatsComponent implements OnInit, AfterContentInit, OnDestroy {
  moment = moment;
  @ViewChild(MatCalendar, {static: true}) _datePicker: MatCalendar<Moment>;
  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();
  @Output()
  selectedDate = moment();
  isDayActive = true;
  visitData;
  calendar: Calendar;
  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) { 
    console.log('times');
    
  }

  ngOnInit() {
  this.calendar = this.dashboardService.getCalendar('#example-calendar');

    if (this._datePicker) {
      this._datePicker.selectedChange.subscribe(x => {
        this.dashboardService.getDailyVisits(moment(x).format('YYYY-MM-DD')).subscribe(res => {
          this.visitData = res;
        });
      });
    }
    this.calendar.setOptions({
      usageStatistics: false,
      defaultView: 'week',
      isReadOnly: true,
    });
    this.dashboardService.getDailyVisits(moment().format('YYYY-MM-DD')).subscribe(res => {
      this.visitData = res;
    });
    this.calendar.clear();
    this.calendar.createSchedules([
      {
        id: '3',
        calendarId: '2',
        title: 'my schedule down',
        category: 'time',
        dueDateClass: '',
        color: '#46a938',
        bgColor: '#46a9380f',
        customStyle: 'border-top: solid 1px #00800075; border-bottom: solid 1px #00800075;',
        start: '2020-07-12T15:30:00+05:30',
        end: '2020-07-12T21:20:00+05:30',
        isReadOnly: true    // schedule is read-only
      },
    ]);
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }

  toggleDayWeek() {
    this.isDayActive = !this.isDayActive;
    if (!this.isDayActive) {
      this.dashboardService.getWeeklyVisits(moment().startOf('week').format('YYYY-MM-DD'),
      moment().endOf('week').format('YYYY-MM-DD')).subscribe(res => {
        this.visitData = res;
      });
    }
  }

  dateChanged() {
    this._datePicker.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }

  routeToNewVisit()
  {
    this.router.navigateByUrl('/dashboard/dashboard-booking/visits/new-visit');
  }
}
