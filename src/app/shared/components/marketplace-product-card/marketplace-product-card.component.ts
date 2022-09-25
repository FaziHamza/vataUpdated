import { Component, OnInit, Input } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-marketplace-product-card',
  templateUrl: './marketplace-product-card.component.html',
  styleUrls: ['./marketplace-product-card.component.scss']
})
export class MarketplaceProductCardComponent implements OnInit {
  @Input() product;
  @Input() hover = false;

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
