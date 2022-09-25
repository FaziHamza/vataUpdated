import { Component, OnInit, OnChanges } from '@angular/core';
import { MarketplaceService } from '../../marketplace.service';
import { ApiService } from 'src/app/core';
import { TimeLeftPipe } from 'src/app/shared';
declare var $;
@Component({
  selector: 'app-marketplace-popular-goods',
  templateUrl: './marketplace-popular-goods.component.html',
  styleUrls: ['./marketplace-popular-goods.component.scss']
})
export class MarketplacePopularGoodsComponent implements OnInit {
  popularGoods;
  viewType = 'list';
  config = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
      "nextArrow": false,
    "infinite": false
  };
  constructor(private marketplaceService: MarketplaceService, private apiService: ApiService, private timeLeft: TimeLeftPipe) { }

  ngOnInit() {
    this.marketplaceService.getPopularProducts().subscribe(res => {
      this.popularGoods = res;
    });
  }

  filterProductData(){
    return this.popularGoods ? this.popularGoods.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
  }

  onViewSelect(type) {
    this.viewType = type;
  }

  onSort(sortQuery) {
    this.apiService.get('/product/productInfo/?popular=true' + sortQuery).subscribe(
      (res: any) => {
        this.popularGoods = res;
      }
    );
  }

}
