import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(public appSize: AppSizeStateService) { }

  ngOnInit() {
  }

}
