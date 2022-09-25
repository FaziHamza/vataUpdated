import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-rating',
  templateUrl: './bar-rating.component.html',
  styleUrls: ['./bar-rating.component.scss']
})
export class BarRatingComponent implements OnInit {

  @Input() percentage: number = 0;
  @Input() times: number = 0;
  @Input() star: number = 0;
  @Input() deviceType: string = 'desktop';

  constructor() { }

  ngOnInit() {
  }

}
