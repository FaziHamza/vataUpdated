import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-deals-product-outlet',
  templateUrl: './desktop-deals-product-outlet.component.html',
  styleUrls: ['./desktop-deals-product-outlet.component.scss']
})
export class DesktopDealsProductOutletComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
