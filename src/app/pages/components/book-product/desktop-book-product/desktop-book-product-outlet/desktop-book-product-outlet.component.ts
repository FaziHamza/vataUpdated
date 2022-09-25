import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-desktop-book-product-outlet',
  templateUrl: './desktop-book-product-outlet.component.html',
  styleUrls: ['./desktop-book-product-outlet.component.scss']
})
export class DesktopBookProductOutletComponent implements OnInit {
  isMobileScreen: Boolean = false;

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
