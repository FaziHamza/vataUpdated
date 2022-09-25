import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-add-product-container',
  templateUrl: './add-product-container.component.html',
  styleUrls: ['./add-product-container.component.scss']
})
export class AddProductContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
