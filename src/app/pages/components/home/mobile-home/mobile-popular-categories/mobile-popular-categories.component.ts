import { Component, OnInit } from '@angular/core';
import { DesktopPopularCategoriesComponent } from '../../desktop-home/desktop-popular-categories/desktop-popular-categories.component';
import { HomeService } from '../../home.service';
declare var $;

@Component({
  selector: 'app-mobile-popular-categories',
  templateUrl: './mobile-popular-categories.component.html',
  styleUrls: ['./mobile-popular-categories.component.scss']
})
export class MobilePopularCategoriesComponent extends DesktopPopularCategoriesComponent implements OnInit {
  config = {
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "dots": true,
    adaptiveHeight: true,
    vertical: true,
    "infinite": false,
    "nextArrow": false,
    "prevArrow": false
  };
  constructor(homepageService: HomeService) {
    super(homepageService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
