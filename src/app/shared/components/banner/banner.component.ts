import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  isMobileScreen: Boolean = false;

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
