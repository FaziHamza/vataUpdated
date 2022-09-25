import { Component, OnInit } from '@angular/core';
import { MarketplacePopularGoodsComponent } from '../../desktop-marketplace/marketplace-popular-goods/marketplace-popular-goods.component';
import { MarketplaceService } from '../../marketplace.service';
import { ApiService } from 'src/app/core';
import { TimeLeftPipe } from 'src/app/shared';
declare var $;
@Component({
  selector: 'app-marketplace-popular-goods-mobile',
  templateUrl: './marketplace-popular-goods-mobile.component.html',
  styleUrls: ['./marketplace-popular-goods-mobile.component.scss']
})
export class MarketplacePopularGoodsMobileComponent extends MarketplacePopularGoodsComponent implements OnInit {

  constructor(marketplaceService: MarketplaceService, apiService: ApiService, timeLeft: TimeLeftPipe) {
    super(marketplaceService, apiService, timeLeft);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
