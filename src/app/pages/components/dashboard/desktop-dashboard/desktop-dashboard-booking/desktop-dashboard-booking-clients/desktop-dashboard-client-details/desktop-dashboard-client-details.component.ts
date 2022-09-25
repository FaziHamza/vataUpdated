import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataHoldingService } from '../../../../../../../shared/services/data-holding.service';

@Component({
  selector: 'app-desktop-dashboard-client-details',
  templateUrl: './desktop-dashboard-client-details.component.html',
  styleUrls: ['./desktop-dashboard-client-details.component.scss']
})
export class DesktopDashboardClientDetailsComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();
  @Input('clientData') dataClient: any;

  constructor(
    private dataHolder: DataHoldingService,
  ) { }

  ngOnInit() {
    console.log(this.dataClient);
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

}
