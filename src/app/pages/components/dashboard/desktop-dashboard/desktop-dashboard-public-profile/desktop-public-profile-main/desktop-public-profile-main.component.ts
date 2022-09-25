import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';

@Component({
  selector: 'app-desktop-public-profile-main',
  templateUrl: './desktop-public-profile-main.component.html',
  styleUrls: ['./desktop-public-profile-main.component.scss']
})
export class DesktopPublicProfileMainComponent implements OnInit {

  durationType: string = 'day';

  nameAndReviewStatus: any;
  dateToday = 'none';
  blackList: any;
  familyMembers: any;
  openAssets: any;
  marketplaceItems: any;

  serviceCategory: any;
  servicesByCategory: any;
  allServices: any;
  categorizedServices: any = [];

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  blackListParams = {
    limit: 10,
    offset: 0,
    id: '',
    user: this.userService.getUser().user_details.id,
    blacklistuser: '',
    reason: '',
    search: '',
  }

  familyMemberParams = {
    limit: 10,
    offset: 0,
    search: '',
  }

  ngOnInit() {    
    this.apiCalls();
    this.getServiceCategory();
  }

  apiCalls() {
    this.dashboardService.getNameAndReviewStatus(this.dateToday).subscribe(res => {
      this.nameAndReviewStatus = res;
      // console.log(res);
    });

    this.dashboardService.getBlackListMembers(this.blackListParams).subscribe(res => {
      this.blackList = res;
      // console.log(res);
    });

    this.dashboardService.getFamilyMembers(this.familyMemberParams).subscribe(res => {
      this.familyMembers = res.results;
      // console.log(res);
    });

    let user_id = this.userService.getUser().user_details.id;
    this.dashboardService.getPublicProfileMarketplaceItems(user_id).subscribe(res => {
      this.marketplaceItems = res;
      // console.log("marketplaceItems", res);
    });
  }

  getServiceCategory() {
    let shopId = this.userService.getUser().shop_details.id;

    this.dashboardService.getServiceCategory(shopId).subscribe(res => {
      this.serviceCategory = res; 
      // console.log("serviceCategory  > Marketing", res);

      this.serviceCategory.forEach(element => {
        this.getServicesByCategory(element.name);
      });

    })
  }

  getServicesByCategory(categoryName) {
    let shopId = this.userService.getUser().shop_details.id;

    this.dashboardService.getAddService(shopId, categoryName).subscribe(
      (res) => {
        this.servicesByCategory = res;

        this.categorizedServices.push({name: categoryName, services: this.servicesByCategory});
        // console.log("categorizedServices > Marketing", this.categorizedServices);
      },
      (error) => { console.log(error); }
    );
  }

  changeType(type) {
    this.durationType = type;
  }

}
