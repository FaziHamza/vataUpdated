import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-book-product-container',
  templateUrl: './book-product-container.component.html',
  styleUrls: ['./book-product-container.component.scss']
})
export class BookProductContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
