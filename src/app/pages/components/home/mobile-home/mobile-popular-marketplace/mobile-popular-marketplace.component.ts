import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DesktopPopularMarketplaceComponent } from '../../desktop-home/desktop-popular-marketplace/desktop-popular-marketplace.component';
import { HomeService } from '../../home.service';
import { TimeLeftPipe } from 'src/app/shared';

@Component({
  selector: 'app-mobile-popular-marketplace',
  templateUrl: './mobile-popular-marketplace.component.html',
  styleUrls: ['./mobile-popular-marketplace.component.scss']
})
export class MobilePopularMarketplaceComponent extends DesktopPopularMarketplaceComponent implements OnInit {
  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    "nextArrow": false,
    "prevArrow": false
  };
  constructor(homepageService: HomeService, cdr: ChangeDetectorRef, timeLeft: TimeLeftPipe) {
    super(homepageService, cdr, timeLeft);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
