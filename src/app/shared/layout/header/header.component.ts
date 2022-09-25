import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isThemeDark: Observable<boolean>;

  @Output() backStep = new EventEmitter<number>();
  @Input('step') Step: number;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  onBackStep() {
    let getStep = parseInt(localStorage.getItem('step'));
    getStep = getStep-1;
    this.backStep.emit(getStep);
  }

  toggleDarkTheme(checked) {
    this.themeService.setDarkTheme(checked.checked);
    // console.log("checked >", this.isThemeDark);
    // console.log("checked >", checked.target.checked);
  }

}
