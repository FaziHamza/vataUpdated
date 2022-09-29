import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { DataHoldingService } from '../../../../../../../shared/services/data-holding.service';

@Component({
  selector: 'app-desktop-dashboard-all-clients',
  templateUrl: './desktop-dashboard-all-clients.component.html',
  styleUrls: ['./desktop-dashboard-all-clients.component.scss']
})
export class DesktopDashboardAllClientsComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();
  @Output() sendData = new EventEmitter<any>();

  allClients: any;
  getDataClient: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private dataHolder: DataHoldingService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getAllClients();
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

  getAllClients() {
    let params = {
      shop_id: this.userService.getUser().shop_details.id
    }
    this.dashboardService.getClients(params.shop_id).subscribe(res => {
      this.allClients = res;
      console.log(this.allClients);
    })
  }

  setGetClient(data) {
    this.dataHolder.setData(data);
    this.getDataClient = this.dataHolder.getData();

    this.sendData.emit(this.getDataClient);
  }

}
