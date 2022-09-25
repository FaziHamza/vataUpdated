import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-profile-favorites',
  templateUrl: './desktop-profile-favorites.component.html',
  styleUrls: ['./desktop-profile-favorites.component.scss']
})
export class DesktopProfileFavoritesComponent implements OnInit {
  viewType = 'card';
  mySavedSeller = [];
  mySavedSearches = [];
  myFavourites = [];
  config = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    "prevArrow": false,
      "nextArrow": false,
    infinite: false,
  };
  constructor(
    private dashboardService: DashboardService,
    private productService: ProductService,
    private user: UserService
    ) { }

  ngOnInit() {
    this.dashboardService.getMyFavourites().subscribe(res => {
      this.myFavourites = res.data.items;
    });
    this.getMySavedSeller(this.user.getCurrentUser().user_details.id);
    this.getMySavedSearches();
  }

  onViewSelect(type) {
    this.viewType = type;
  }

  getMySavedSeller(userId) {
    console.log(this.mySavedSeller);
    
    this.productService.getSellerByUserId(userId).subscribe(res => {
      this.mySavedSeller = res;
      console.log(this.mySavedSeller);
    })
  }

  getMySavedSearches() {
    
    this.dashboardService.getSavedSearches().subscribe(res => {
      this.mySavedSearches = res.data;
    })
  }

  deleteSavedSeller(id) {
    this.productService.removeSeller(id).subscribe(res => {
      this.getMySavedSeller(this.user.getCurrentUser().user_details.id);
    });
  }
}
