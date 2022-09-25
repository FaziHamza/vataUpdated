import { Component, OnInit } from '@angular/core';
import { DesktopSignupComponent } from '../desktop-signup/desktop-signup.component';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-signup',
  templateUrl: './mobile-signup.component.html',
  styleUrls: ['./mobile-signup.component.scss']
})
export class MobileSignupComponent extends DesktopSignupComponent implements OnInit {

  step: number = 1;

  constructor(themeService: ThemeService, location: Location) {
    super(themeService, location);
  }


  ngOnInit() {
    super.ngOnInit();
  }

}
