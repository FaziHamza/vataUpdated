import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-seller-container',
  templateUrl: './seller-container.component.html',
  styleUrls: ['./seller-container.component.scss']
})
export class SellerContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
