import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss']
})
export class DesktopHomeComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
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

}
