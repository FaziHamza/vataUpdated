import { Component, OnInit, HostListener } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-desktop-best-bookings',
  templateUrl: './desktop-best-bookings.component.html',
  styleUrls: ['./desktop-best-bookings.component.scss']
})
export class DesktopBestBookingsComponent implements OnInit {
  bestBookingsData;
  config = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    "prevArrow": false,
      "nextArrow": false,
  };
  constructor(private homepageService: HomeService, private router: Router) { }
  
  ngOnInit() {
    if ($(window).width() < 1100 && $(window).width() > 950) {
      this.config["slidesToShow"] = 4;
    } else if($(window).width() < 950 && $(window).width() > 768){
      this.config["slidesToShow"] = 3;
    }
    this.homepageService.getBestBookings().subscribe((res: any) => {
      this.bestBookingsData = res.data;
    });
  }

  showProductDetails(index) {
    const selectedProduct = this.bestBookingsData[index];
    this.router.navigate([`book-product/${selectedProduct.shopID}`])
  }

}
