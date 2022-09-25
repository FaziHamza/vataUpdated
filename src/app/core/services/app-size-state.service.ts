import { Injectable, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface WindowSize {
  width: number
};

@Injectable({
  providedIn: 'root'
})

export class AppSizeStateService {
  isMobileResolution: boolean;
  constructor(@Inject('window') private window: Window) {
    
    fromEvent(window, 'resize').pipe(map(event => <WindowSize>{ 
      width: event['currentTarget']['innerWidth'], 
    }))
        .subscribe((windowSize) => {
            this.windowSizeChanged.next(windowSize);
        })
  };
  
  readonly windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth
  });

  public getIsMobileResolution(): boolean {
    this.windowSizeChanged.subscribe(res => {
      if (res.width < 768) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
    });
    return this.isMobileResolution;
  }

  
}
