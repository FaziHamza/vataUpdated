import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../../shared/services/theme/theme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-desktop-signup',
  templateUrl: './desktop-signup.component.html',
  styleUrls: ['./desktop-signup.component.scss']
})
export class DesktopSignupComponent implements OnInit {

  isThemeDark: Observable<boolean>;
  addressType = window.localStorage.getItem('addressType');
  isPrivate = window.localStorage.getItem('isPrivateRegistered');
  step: number = 1;

  constructor(
    private themeService: ThemeService,
    private location: Location
   ) { }

  ngOnInit() {
    console.log(this.addressType, this.step, this.isPrivate);
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
    this.checkStep();
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }
  

  checkStep() {
    const getStep = localStorage.getItem('step');
    
    if (getStep) {
      this.step = parseInt(getStep);
    } else {
      this.step = 1;
    }
  }

  getStep(step) {
    // this.step = step;
    console.log("Parent >", step);

    this.step = step;
    localStorage.setItem('step', step);
  }

  onAddressType(type) {
    this.addressType = type;
  }

  backStep(step) {
    console.log("backStep >", step)

    if (step >= 1) {
      if (step === 4 && this.isPrivate === 'true') {
        this.step = 3;
      } else {
        this.step = step;
      }
      localStorage.setItem('step', step);
    } else{
      this.location.back();
    }
  }
}
