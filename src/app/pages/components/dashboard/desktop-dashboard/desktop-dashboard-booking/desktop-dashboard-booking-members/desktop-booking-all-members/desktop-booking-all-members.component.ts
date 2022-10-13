import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { DataHoldingService } from '../../../../../../../shared/services/data-holding.service';
import { Subscription } from 'rxjs';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-desktop-booking-all-members',
  templateUrl: './desktop-booking-all-members.component.html',
  styleUrls: ['./desktop-booking-all-members.component.scss']
})
export class DesktopBookingAllMembersComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  @Output() selectType = new EventEmitter<string>();
  @Output() sendData = new EventEmitter<any>();

  // allMembers: any;
  getDataMember: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private dataHolder: DataHoldingService,
    private userService: UserService,
    public memberService:MemberService
  ) { }

  ngOnInit() {
    this.getAllMembers();
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

  getAllMembers() {

    this.subscriptions.push(
    this.dashboardService.getListMembers().subscribe(res => {
      this.memberService.allMembersList=[];
      this.memberService.allMembersList = res; 
      console.log("allMembers", this.memberService.allMembersList);
    }))
  }

  setGetMember(data) {
    this.dataHolder.setData(data);
    this.getDataMember = this.dataHolder.getData();

    this.sendData.emit(this.getDataMember);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
