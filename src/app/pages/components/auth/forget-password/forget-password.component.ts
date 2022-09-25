import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, UserService, AppSizeStateService } from 'src/app/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pattern } from 'src/app/shared/regex.pattern';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

 constructor(public appSize: AppSizeStateService) {}

 ngOnInit() {}
}
