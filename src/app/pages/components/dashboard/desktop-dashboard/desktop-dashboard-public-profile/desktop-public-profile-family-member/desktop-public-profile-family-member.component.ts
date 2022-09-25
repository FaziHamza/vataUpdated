import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService } from 'src/app/core';
import { DataHoldingService } from '../../../../../../shared/services/data-holding.service';

@Component({
  selector: 'app-desktop-public-profile-family-member',
  templateUrl: './desktop-public-profile-family-member.component.html',
  styleUrls: ['./desktop-public-profile-family-member.component.scss']
})
export class DesktopPublicProfileFamilyMemberComponent implements OnInit {

  @Input('familyMembersData') familyMembers: string;
  @Output() getAllFamilyMember = new EventEmitter<string>();

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private dataHolder: DataHoldingService
  ) { }

  ngOnInit() {
  }

  setFamilyMember(data) {
    this.dataHolder.setData(data);
  }

  deleteFamilyMember(id) {
    this.dashboardService.deleteFamilyMember(id).subscribe(res => {
      console.log(res);

      this.getAllFamilyMember.emit();
    })
  }

}
