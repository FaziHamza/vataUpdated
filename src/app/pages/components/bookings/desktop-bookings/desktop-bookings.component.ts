import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-desktop-bookings',
  templateUrl: './desktop-bookings.component.html',
  styleUrls: ['./desktop-bookings.component.scss']
})
export class DesktopBookingsComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  categories;
  constructor (
    private booking: BookingsService, 
    private catHolder: CategoriesHolderService,
    private themeService: ThemeService,
    ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();

    this.booking.getPopularCategories().subscribe(res => {
      let data = res.filter((item) => item.parent == null);
      
      data.forEach(element => {
        let temp = []
        if (element.parent == null) {
          if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
          temp.push(element);
        }
      });
      this.categories = data;
    });
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

  onCatSelect(catData) {
    this.catHolder.setCategory(catData.name)
  }

}
