import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss']
})
export class ToggleViewComponent implements OnInit, AfterViewInit {
  @Output() viewType = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.list-view span').addClass('active-s');

    $('.list-view').click(function () {
      $('.list-view span').addClass('active-s');
      $('.card-view span').removeClass('active-s');
    });

    $('.card-view').click(function () {
      $('.card-view span').addClass('active-s');
      $('.list-view span').removeClass('active-s');
    });
  }

  selectView(type) {
    this.viewType.emit(type);
  }

}
