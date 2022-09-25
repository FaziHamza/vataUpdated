import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-deals-card',
  templateUrl: './top-deals-card.component.html',
  styleUrls: ['./top-deals-card.component.scss']
})
export class TopDealsCardComponent implements OnInit {
  @Input() deal;
  constructor() { }

  ngOnInit() {
  }

}
