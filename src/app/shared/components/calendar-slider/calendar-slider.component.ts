import { Component, OnInit, ElementRef, ChangeDetectorRef, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-slider',
  templateUrl: './calendar-slider.component.html',
  styleUrls: ['./calendar-slider.component.scss']
})

export class CalendarSliderComponent implements OnInit, OnChanges {
  @Output() dateSelected = new EventEmitter();
  @Output() timeSelected = new EventEmitter();
  @Input() shopTimings; 
  @Input() selectedValues = { preferredDate: null, preferredTiming: '' };
  public selectedTime: string;
  public datePicker: DatePicker;
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  times = [];
  constructor(
    private _elem: ElementRef,
    private _cdr: ChangeDetectorRef
  ) {
    this.selectedTime = "12:00";
    this.datePicker = new DatePicker();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'shopTimings': {
            if (this.shopTimings) {
              this.generateTimeArray(this.shopTimings);
            }
          }
          case 'selectedValues': {
            if (this.selectedValues.preferredTiming) {
              this.selectedTime = this.selectedValues.preferredTiming;
            } else {
              this.selectedTime = "";
            }
            if (this.selectedValues.preferredDate) {
              this.datePicker.setPreviewData(this.selectedValues.preferredDate);
              this.datePicker.setActiveDate(this.selectedValues.preferredDate.getDate());
            }
          }
        }
      }
    }
  }

  generateTimeArray(shopTimings) {
    this.times = [];
    let startTime = moment(shopTimings.startTime, "HH:mm:ss");
    startTime.format("HH:mm")
    
    while (startTime.isBefore(moment(shopTimings.endTime, "HH:mm:ss"))) {
      this.times.push(startTime.format("HH:mm"));
      startTime = startTime.add(1, 'hours');
    }
  }

  private setTime(event) {
    this.selectedTime = event.target.innerText;
    this._cdr.detectChanges();
    this.emitTimeChange();
  }

  public setDay(date): void {
    this.datePicker.setActiveDate(date);
    this.emitDateChange();
  }

  private getDate() {
    const a = this.datePicker.active;
    return a.year + "-" + (a.month > 9 ? a.month : "0" + a.month) + "-" + a.date + " " + this.selectedTime;
  }

  private getTime() {
    return this.selectedTime;
  }

  private emitDateChange() {
    this.dateSelected.emit(this.getDate());
  }

  private emitTimeChange() {
    this.timeSelected.emit(this.getTime());
  }

  getMorningTimes(times) {
    let morningTimes = [];
    let noon = moment().toDate();
    noon.setHours(12);
    for (let time of times) {
      if (moment(time, "HH:mm:ss").toDate().getHours() < noon.getHours()) {
        morningTimes.push(time);
      }
    }

    return morningTimes;
  }

  getAfternoonTimes(times){
    
    let afternoonTimes = [];
    let noon = moment().toDate();
    let evening = moment().toDate();
    noon.setHours(12);
    evening.setHours(17);
    for (let time of times) {
      if (noon.getHours() < moment(time, "HH:mm:ss").toDate().getHours() && 
      moment(time, "HH:mm:ss").toDate().getHours() < evening.getHours()) {
        afternoonTimes.push(time);
      }
    }

    return afternoonTimes;
  }

  getEveningTimes(times) {
    let eveningTimes = [];
    let evening = moment().toDate();
    evening.setHours(17);

    for (let time of times) {
      if (moment(time, "HH:mm:ss").toDate().getHours() >= evening.getHours()) {
        eveningTimes.push(time);
      }
    }

    return eveningTimes;
  }
}

class DatePicker {
  grid: any[];
  active: { year: number, month: number, date: number };
  preview: { year: number, month: number, week: number };

  constructor() {
    const dateObj = new Date();
    const dateYr = dateObj.getFullYear();
    const dateMth = dateObj.getMonth();
    const date = dateObj.getDate();

    this.preview = { year: dateYr, month: dateMth, week: null };
    this.active = { year: dateYr, month: dateMth, date: date };

    this.refreshGrid();
    this.preview.week = this.getWeekFromDay(date);
  }

  public setPreviewData(selectedDate) {
    this.preview.week = this.getWeekFromDay(selectedDate.getDate());
    this.preview.month = selectedDate.getMonth();
    this.preview.year = selectedDate.getFullYear();
  }
  
  public setActiveDate(date): void {
    this.active.date = date;
    this.active.month = this.preview.month;
    this.active.year = this.preview.year;
  }

  private refreshGrid(): void {
    let Calendar = this.getCalendar();
    let cal = new Calendar(1);
    this.grid = cal.monthDays(this.preview.year, this.preview.month);
  }

  private nextMonth() {
    if (this.preview.month == 11) {
      this.preview.year++;
      this.preview.month = 0;
    } else {
      this.preview.month++;
    }
  }

  private prevMonth() {
    if (this.preview.month == 0) {
      this.preview.year--;
      this.preview.month = 11;
    } else {
      this.preview.month--;
    }
  }

  public nextWeek(): void {
    if ((this.grid.length - 1) != this.preview.week) {
      this.preview.week++;
    } else {
      this.nextMonth();
      this.refreshGrid();
      this.preview.week = 0;
    }
  }

  public prevWeek(): void {
    if (this.preview.week != 0) {
      this.preview.week--
    } else {
      this.prevMonth();
      this.refreshGrid();
      this.preview.week = this.grid.length - 1;
    }
  }

  private getWeekFromDay(day): number {
    for (var i = 0; i < this.grid.length; i++) {
      if (this.grid[i].includes(day)) return i;
    }
    return null;
  }

  private getCalendar() {
    var CalendarException = function CalendarException(message) {
      this.message = message;
      this.toString = function () {
        return this.constructor.name + ": " + this.message
      };
    }

    var Calendar = function Calendar(firstWeekDay) {
      this.firstWeekDay = firstWeekDay || 0; // 0 = Sunday
    };

    Calendar.prototype = {
      constructor: Calendar,
      weekStartDate: function weekStartDate(date) {
        var startDate = new Date(date.getTime());
        while (startDate.getDay() !== this.firstWeekDay) {
          startDate.setDate(startDate.getDate() - 1);
        }
        return startDate;
      },
      monthDates: function monthDates(year, month, dayFormatter, weekFormatter) {
        if ((typeof year !== "number") || (year < 1970)) {
          throw new CalendarException('year must be a number >= 1970');
        };
        if ((typeof month !== "number") || (month < 0) || (month > 11)) {
          throw new CalendarException('month must be a number (Jan is 0)');
        };
        var weeks = [],
          week = [],
          i = 0,
          date = this.weekStartDate(new Date(year, month, 1));
        do {
          for (i = 0; i < 7; i++) {
            week.push(dayFormatter ? dayFormatter(date) : date);
            date = new Date(date.getTime());
            date.setDate(date.getDate() + 1);
          }
          weeks.push(weekFormatter ? weekFormatter(week) : week);
          week = [];
        } while ((date.getMonth() <= month) && (date.getFullYear() === year));
        return weeks;
      },
      monthDays: function monthDays(year, month) {
        var getDayOrZero = function getDayOrZero(date) {
          return date.getMonth() === month ? date.getDate() : 0;
        };
        return this.monthDates(year, month, getDayOrZero);
      }
    };
    var months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
    for (var i = 0; i < months.length; i++) Calendar[months[i]] = i;
    return Calendar;
  }
}