import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-home-header',
  templateUrl: './mobile-home-header.component.html',
  styleUrls: ['./mobile-home-header.component.scss']
})
export class MobileHomeHeaderComponent implements OnInit {

  isThemeDark: boolean = false;

  constructor() { }

  ngOnInit() {
    this.checkDarkMode();
    console.log("this.isThemeDark >", this.isThemeDark);
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.isThemeDark = true;
    } else {
      this.isThemeDark = false;
    }
  }

}
