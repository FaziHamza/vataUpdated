import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-add-product-variation',
  templateUrl: './add-product-variation.component.html',
  styleUrls: ['./add-product-variation.component.scss']
})
export class AddProductVariationComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit(): void {
  }

}
