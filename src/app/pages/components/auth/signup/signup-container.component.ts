import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.scss']
})
export class SignupContainerComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  isMobileScreen: Boolean = false;

  constructor(
    public appSize: AppSizeStateService,
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
