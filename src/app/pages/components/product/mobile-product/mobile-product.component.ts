import { Component, OnInit } from '@angular/core';
import { DesktopProductComponent } from '../desktop-product/desktop-product.component';

@Component({
  selector: 'mobile-product',
  templateUrl: './mobile-product.component.html',
  styleUrls: ['./mobile-product.component.scss']
})
export class MobileProductComponent extends DesktopProductComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
