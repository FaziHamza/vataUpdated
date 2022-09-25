import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: any[];
  @Output() selectedCat:EventEmitter<any> = new EventEmitter();
  @ViewChild('childMenu', {static: true}) public childMenu;
  constructor() { }

  ngOnInit(): void {
  }

  selected(evt){
    this.selectedCat.emit(evt);
  }

}
