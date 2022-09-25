import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService, LoaderService } from './core';
import { AppSizeStateService } from './core/services/app-size-state.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  value = 'XGiovannix90';
  password = window.localStorage.getItem('entry_pass');
  constructor (
    public userService: UserService,
    public appSize: AppSizeStateService,
    private router: Router,
    private loaderService: LoaderService,
    private dialog: MatDialog
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.dialog.closeAll();
          this.loaderService.show();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loaderService.hide();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.userService.populate();
    console.log(this.appSize.getIsMobileResolution());
  }

  ngOnDestroy(){
    window.localStorage.clear();
  }

  submit(val){
    if(val === this.value){
      window.localStorage.setItem('entry_pass', val);
      this.password = val;
    }
  }
}
