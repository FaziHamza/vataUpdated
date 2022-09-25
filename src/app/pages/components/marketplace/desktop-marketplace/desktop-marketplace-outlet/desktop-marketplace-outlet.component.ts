import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-marketplace-outlet',
  templateUrl: './desktop-marketplace-outlet.component.html',
  styleUrls: ['./desktop-marketplace-outlet.component.scss']
})
export class DesktopMarketplaceOutletComponent implements OnInit {
  isMobileScreen: Boolean = false;

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }
}
