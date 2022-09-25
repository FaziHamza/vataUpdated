import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-desktop-public-profile-user-block',
  templateUrl: './desktop-public-profile-user-block.component.html',
  styleUrls: ['./desktop-public-profile-user-block.component.scss']
})
export class DesktopPublicProfileUserBlockComponent implements OnInit {

  @Input('blackListData') blackList: string;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService
  ) { }

  ngOnInit() {    
  }

  deleteBlacklist(id) {
    this.dashboardService.deleteFamilyMember(id).subscribe(res => {
      console.log(res);
    })
  }

}
