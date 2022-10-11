import { Component, OnInit,OnDestroy } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-booking-review-ratings',
  templateUrl: './desktop-booking-review-ratings.component.html',
  styleUrls: ['./desktop-booking-review-ratings.component.scss']
})
export class DesktopBookingReviewRatingsComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];

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
    this.subscriptions.push(
    this.dashboardService.getShopRatingInfo(userId).subscribe(res => {
      this.shopRatingInfo = res;

      console.log("shopRatingInfo", res);
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
