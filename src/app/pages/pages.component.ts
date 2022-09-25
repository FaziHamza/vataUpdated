import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from '../core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
