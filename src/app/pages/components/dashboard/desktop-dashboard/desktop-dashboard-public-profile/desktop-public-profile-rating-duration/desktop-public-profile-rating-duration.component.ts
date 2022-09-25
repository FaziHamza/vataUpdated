import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-desktop-public-profile-rating-duration',
  templateUrl: './desktop-public-profile-rating-duration.component.html',
  styleUrls: ['./desktop-public-profile-rating-duration.component.scss']
})
export class DesktopPublicProfileRatingDurationComponent implements OnInit {

  @Input('nameAndReviewStatusData') nameAndReviewStatus: string;

  dateToday = 'none';

  durationType: string = 'day';

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService
  ) { }


  ngOnInit() {
  }

  durationNameAndReviewStatus(duration) {
    this.changeType(duration);

    this.dateToday = duration;
    this.dashboardService.getNameAndReviewStatus(this.dateToday).subscribe(res => {
      this.nameAndReviewStatus = res;
      // console.log(res);
    });
  }

  changeType(type) {
    this.durationType = type;
  }

}
