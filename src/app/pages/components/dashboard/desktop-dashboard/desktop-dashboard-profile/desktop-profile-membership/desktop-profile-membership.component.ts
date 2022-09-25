import { Component, OnInit } from '@angular/core';
import { TempSignupDataService } from '../../../../../../core/services/temp-signup-data-service';

@Component({
  selector: 'app-desktop-profile-membership',
  templateUrl: './desktop-profile-membership.component.html',
  styleUrls: ['./desktop-profile-membership.component.scss']
})
export class DesktopProfileMembershipComponent implements OnInit {

  plan: string = 'private';

  constructor(
    public signupData: TempSignupDataService,
  ) { }

  ngOnInit() {
    this.checkDataExist();
  }

  checkDataExist() {
    // getting data from service 
    let data = this.signupData.getChoosePlan();
    this.plan = data;
  }

  selectPlan(plan) {
    this.plan = plan;
    // storing data in a service 
    this.signupData.setChoosePlan(plan);
  }

}
