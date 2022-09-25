import { Component, OnInit } from '@angular/core';
import { DesktopCatalogComponent } from '../desktop-catalog/desktop-catalog.component';
import { CatalogService } from '../catalog.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-mobile-catalog',
  templateUrl: './mobile-catalog.component.html',
  styleUrls: ['./mobile-catalog.component.scss']
})
export class MobileCatalogComponent extends DesktopCatalogComponent implements OnInit {

  categoryType: boolean = false;

  constructor(themeService: ThemeService, catalogService: CatalogService) {
    super(themeService, catalogService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

  changeCategoryType() {
    this.categoryType = !this.categoryType;
  }

}
