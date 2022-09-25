import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  isMobileScreen: Boolean = false;

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
