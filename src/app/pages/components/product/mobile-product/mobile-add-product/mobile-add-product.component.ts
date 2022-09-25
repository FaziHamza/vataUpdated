import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-add-product',
  templateUrl: './mobile-add-product.component.html',
  styleUrls: ['./mobile-add-product.component.scss']
})
export class MobileAddProductComponent implements OnInit {

  tab: string = "marketplace";

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.tab = tab;
    console.log(this.tab);
  }

}
