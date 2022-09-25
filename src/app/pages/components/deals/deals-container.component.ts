import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-deals-container',
  templateUrl: './deals-container.component.html',
  styleUrls: ['./deals-container.component.scss']
})
export class DealsContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
