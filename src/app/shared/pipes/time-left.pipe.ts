import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeLeft',
  pure: false
})
export class TimeLeftPipe implements PipeTransform, OnDestroy {
  timer;
  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) { }

  transform(value: string, args: any = { 'showDayTime': true }) {
    this.removeTimer();

    const timeLeft = moment(value).diff(moment(), 'seconds');
    if (timeLeft < 0) {
      return 'Time Ended';
    }
    if (value) {
      const expiryDate = +new Date(value);
      const now = +new Date();
      let seconds = (expiryDate - now) / 1000; // expiry Date - current time
      const sign = Math.sign(seconds);
      let suffix = 'left'; // if the time is yet to come.
      if (sign === -1) {
        seconds = Math.floor(seconds * sign); // removign the sign and the float part -25.5  = 25 seconds 
        suffix = 'ago'; // if time is already expired.
      }
      this.timer = this.ngZone.runOutsideAngular(() => {
        if (typeof window !== 'undefined') {
          return window.setTimeout(() => {
            this.ngZone.run(() => {
              this.changeDetectorRef.detectChanges();
              this.changeDetectorRef.markForCheck();
            });
          }, 1000);
        }
        return null;
      });
      const intervals = {
        // 'y': 31536000,
        // 'm': 2592000,
        // 'w': 604800,
        'd': 86400,
        'h': 3600,
        'm': 60,
        's': 1
      };
      const allInterval = ['d', 'h', 'm', 's'];
      // const allInterval = ['h', 'm', 's'];
      let counter;
      for (let i of allInterval) {
        counter = Math.floor(seconds / intervals[i]);
        let toReturn = '';
        // calculateion shown for for 2hour:51 minute = 171 minute = 10260 second
        if (counter > 0) {
          toReturn += this.calculateTime(counter, i);  // this will give 2 hours
          const timeLeft = seconds - counter * intervals[i]; // 3060 second
          const index = allInterval.indexOf(i) + 1; // get the index of next unit
          i = allInterval[index]; // value of next unit = minute
          if (index > 2) {
            return toReturn + suffix; // second ago for boundary case
          }
          counter = Math.floor(timeLeft / intervals[i]) % 60;
          toReturn = toReturn + ' ' + this.calculateTime(counter, i);
          const timeLeft2 = seconds - counter * intervals[i]; // 3060 second

          counter = Math.floor(timeLeft2 % intervals[i]);
          const index1 = allInterval.indexOf(i) + 1; // get the index of next unit
          i = allInterval[index1]; // value of next unit = minute

          toReturn = toReturn + ' ' + this.calculateTime(counter, i);
          this.changeDetectorRef.markForCheck();
          if (args && args['showDayTime']) {
            toReturn = toReturn + ' ' + moment(value).format('dddd') +
              ' ' + moment(value).format('hh:mm A'); // will calculate "2 hours 51 Minutes" from current time
            // 3060 second = 51
          }
        }
        if(counter === 0 && i === 'd'){}
        else if(counter === 0 && i === 'h'){}
        else
        return toReturn;
      }
    }
    return value;
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }
  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  calculateTime(counter: number, timeUnit: string) {
    let time = null;
    if (counter === 1) {
      time = counter + timeUnit; // singular (1 hours ago)
    } else {
      const toReturn = counter + timeUnit;
      time = toReturn; // plural (2 hours ago)
    }
    if (counter < 10) {
      time = '0' + time;
    }
    this.changeDetectorRef.markForCheck();

    return time;

  }
}
