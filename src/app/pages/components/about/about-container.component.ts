import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
    this.watchScreenChanges();
  }

  watchScreenChanges() {
  }

}
