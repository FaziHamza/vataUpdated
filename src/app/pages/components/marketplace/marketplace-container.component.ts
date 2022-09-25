import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-marketplace-container',
  templateUrl: './marketplace-container.component.html',
  styleUrls: ['./marketplace-container.component.scss']
})
export class MarketplaceContainerComponent implements OnInit {
  isMobileScreen: Boolean = false;
  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }
}
