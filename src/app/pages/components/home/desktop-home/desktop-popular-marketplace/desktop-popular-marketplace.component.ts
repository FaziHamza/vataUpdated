import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../../home.service';
import { TimeLeftPipe } from 'src/app/shared';
declare var $;

@Component({
  selector: 'app-desktop-popular-marketplace',
  templateUrl: './desktop-popular-marketplace.component.html',
  styleUrls: ['./desktop-popular-marketplace.component.scss']
})
export class DesktopPopularMarketplaceComponent implements OnInit {
  config;
  popularProductsData;

  constructor(private homepageService: HomeService, private cdr: ChangeDetectorRef, private timeLeft: TimeLeftPipe) {
    this.config = {
      "slidesToShow": 5,
      "slidesToScroll": 3,
      "dots": true,
      "prevArrow": false,
      "nextArrow": false,
      "infinite": false
    };
  }

  ngOnInit() {
    if ($(window).width() < 1100 && $(window).width() > 950) {
      this.config["slidesToShow"] = 4;
    } else if($(window).width() < 950 && $(window).width() > 768){
      this.config["slidesToShow"] = 3;
    }
    this.homepageService.getPopularProducts().subscribe((res: any) => {
      this.popularProductsData = res;
    });
  }

  filterProductData(){
    return this.popularProductsData ? this.popularProductsData.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
  }
}
