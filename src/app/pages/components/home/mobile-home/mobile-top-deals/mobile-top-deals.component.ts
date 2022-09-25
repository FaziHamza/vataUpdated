import { Component, OnInit } from '@angular/core';
import { DesktopTopDealsComponent } from '../../desktop-home/desktop-top-deals/desktop-top-deals.component';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-mobile-top-deals',
  templateUrl: './mobile-top-deals.component.html',
  styleUrls: ['./mobile-top-deals.component.scss']
})
export class MobileTopDealsComponent extends DesktopTopDealsComponent implements OnInit {
  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
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
