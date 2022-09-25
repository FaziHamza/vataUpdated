import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-desktop-public-profile-info',
  templateUrl: './desktop-public-profile-info.component.html',
  styleUrls: ['./desktop-public-profile-info.component.scss']
})
export class DesktopPublicProfileInfoComponent implements OnInit {

  @Input('publicProfileData') publicProfile: string;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

}
