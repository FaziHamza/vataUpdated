import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-donate-pot',
  templateUrl: './widgets-donate-pot.component.html',
  styleUrls: ['./widgets-donate-pot.component.scss']
})
export class WidgetsDonatePotComponent implements OnInit {

  durationType: string = 'day';

  constructor() { }

  ngOnInit(): void {
  }

  changeType(type) {
    this.durationType = type;
  }
}
