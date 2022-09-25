import { Component, OnInit, Input } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';
import { TimeLeftPipe } from '../..';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent implements OnInit {
  @Input('data') data: any;
  marketplaceData: any = null;
  bookingData: any = null;
  constructor(public appSize: AppSizeStateService, private timeLeft: TimeLeftPipe) { }

  ngOnInit() {
    console.log(this.data);
    this.marketplaceData = this.data[0] ? this.data[0].data : null
    this.bookingData = this.data[1] ? this.data[1].data : null
  }

  filterProductData(data){
    return data ? data.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
  }
}
