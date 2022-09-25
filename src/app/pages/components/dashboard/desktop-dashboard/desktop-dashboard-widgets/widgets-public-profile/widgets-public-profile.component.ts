import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-public-profile',
  templateUrl: './widgets-public-profile.component.html',
  styleUrls: ['./widgets-public-profile.component.scss']
})
export class WidgetsPublicProfileComponent implements OnInit {

  durationType: string = 'day';

  constructor() { }

  ngOnInit(): void {
  }

  changeType(type) {
    this.durationType = type;
  }

}
