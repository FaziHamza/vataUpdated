import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('step') Step: number;
  isThemeDark: boolean = false;

  constructor() { }

  ngOnInit() {
    this.checkDarkMode();
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
