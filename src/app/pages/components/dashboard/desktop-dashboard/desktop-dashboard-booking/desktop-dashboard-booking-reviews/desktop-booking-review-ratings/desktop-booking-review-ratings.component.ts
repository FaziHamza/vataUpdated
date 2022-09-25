import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-booking-review-ratings',
  templateUrl: './desktop-booking-review-ratings.component.html',
  styleUrls: ['./desktop-booking-review-ratings.component.scss']
})
export class DesktopBookingReviewRatingsComponent implements OnInit {

  shopRatingInfo: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getShopRatingInfo();
  }

  getShopRatingInfo() {
    let userId = this.userService.getUser().user_details.id;

    this.dashboardService.getShopRatingInfo(userId).subscribe(res => {
      this.shopRatingInfo = res;

      console.log("shopRatingInfo", res);
    })
  }

}
