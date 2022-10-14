import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

  @Output() backStep = new EventEmitter<number>();
  @Input('step') Step: number;

  isThemeDark: boolean = false;

  constructor(
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
    this.checkDarkMode();
  }

  onBackStep() {
   //FaziComment
    // if (this.router.url === '/auth/signup') {
    //   let getStep = parseInt(localStorage.getItem('step'));
    //   getStep = getStep-1;
    //   this.backStep.emit(getStep);
    // } else {
    //   this.location.back();
    // }
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
