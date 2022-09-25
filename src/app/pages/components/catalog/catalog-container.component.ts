import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-catalog-container',
  templateUrl: './catalog-container.component.html',
  styleUrls: ['./catalog-container.component.scss']
})
export class CatalogContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }
}
