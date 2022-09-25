import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-marketplace-card-list-view',
  templateUrl: './marketplace-card-list-view.component.html',
  styleUrls: ['./marketplace-card-list-view.component.scss']
})
export class MarketplaceCardListViewComponent implements OnInit {
  isDark = false;
  @Input() product;
  constructor(public appSize: AppSizeStateService, public themeService: ThemeService
    ) { }

  ngOnInit() {
  }

}
