import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, LoaderService } from 'src/app/core';

@Component({
  selector: 'app-verify-email-account',
  templateUrl: './verify-email-account.component.html',
  styleUrls: ['./verify-email-account.component.scss']
})
export class VerifyEmailAccountComponent implements OnInit {
  token;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private loaderService: LoaderService
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params["token"];
    });
  }

  onConfirmAccount() {
    this.userService.verifyEmailAccount({token: this.token}).subscribe(res => {
      console.log(res);
      this.loaderService.show();
      setTimeout(() => {
        this.router.navigateByUrl('/auth/login');
        this.loaderService.hide();
      }, 1000);
    });
  }

}
