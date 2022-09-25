import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-public-profile-marketplace',
  templateUrl: './desktop-public-profile-marketplace.component.html',
  styleUrls: ['./desktop-public-profile-marketplace.component.scss']
})
export class DesktopPublicProfileMarketplaceComponent implements OnInit {

  @Input('openAssetsData') openAssetsData: string;

  constructor() { }

  ngOnInit() {
  }

}
