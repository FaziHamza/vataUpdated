import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
declare var $;
@Component({
  selector: 'app-desktop-top-deals',
  templateUrl: './desktop-top-deals.component.html',
  styleUrls: ['./desktop-top-deals.component.scss']
})
export class DesktopTopDealsComponent implements OnInit {

  topDealsData;
  config = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
 
  constructor(private homepageService: HomeService) {}

  ngOnInit() {
    this.homepageService.getTopDeals().subscribe(res => {
  this.topDealsData = res;
    });
  }
}
