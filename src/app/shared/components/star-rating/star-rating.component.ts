import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() score: number;
  @Input() size = '10px';
  @Input() maxScore = 5;
  @Input() forDisplay = false;
  @Output() rateChanged = new EventEmitter();

  range = [];
  marked = -1;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.maxScore; i++) {
      this.range.push(i);
    }
  }

  public mark = (index) => {
    this.marked = this.marked === index ? index - 1 : index;
    this.score = this.marked + 1;
    this.rateChanged.next(this.score);
  }

  public isMarked = (index) => {
    if (!this.forDisplay) {
      if (index <= this.marked || (index + 1) <= this.score) {
        return 'fa-star fa-star-filled';
      } else {
        return 'fa-star fa-star-empty';
      }
    } else {
      if (this.score >= index + 1) {
        return 'fa-star fa-star-filled';
      } else if (this.score > index && this.score < index + 1) {
        return 'fa-star-half fa-star-empty';
      } else {
        return 'fa-star fa-star-empty';
      }
    }
  }
}
