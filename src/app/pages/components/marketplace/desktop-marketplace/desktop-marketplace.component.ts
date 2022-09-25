import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MarketplaceService } from '../marketplace.service';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desktop-marketplace',
  templateUrl: './desktop-marketplace.component.html',
  styleUrls: ['./desktop-marketplace.component.scss']
})
export class DesktopMarketplaceComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  categories;
  constructor (
    private marketplace: MarketplaceService, 
    private catHolder: CategoriesHolderService,
    private themeService: ThemeService,
    ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();

    this.marketplace.getPopularCategories().subscribe(res => {    
      
      res.forEach(element => {
        let temp = []
        if (element.parent == null) {
          if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
          if (element.icon_content) element.icon_content = element.icon_content.replace('width="23.999" height="24"', 'width="105" height="105"');
          if (element.icon_content) element.icon_content = element.icon_content.replace('width="24" height="24"', 'width="105" height="105"');

          temp.push(element);
        }
      });
      this.categories = [];
      res.map((x) => {
        if(!x.ancestors.length)
          this.categories.push(x);
      })
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
