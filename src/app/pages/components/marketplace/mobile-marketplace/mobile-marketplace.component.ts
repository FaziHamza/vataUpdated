import { Component, OnInit } from '@angular/core';
import { DesktopMarketplaceComponent } from '../desktop-marketplace/desktop-marketplace.component';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { MarketplaceService } from '../marketplace.service';

@Component({
  selector: 'app-mobile-marketplace',
  templateUrl: './mobile-marketplace.component.html',
  styleUrls: ['./mobile-marketplace.component.scss']
})
export class MobileMarketplaceComponent extends DesktopMarketplaceComponent implements OnInit {

  constructor( marketplace: MarketplaceService, 
     catHolder: CategoriesHolderService,
     themeService: ThemeService) {
    super(marketplace, catHolder, themeService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
