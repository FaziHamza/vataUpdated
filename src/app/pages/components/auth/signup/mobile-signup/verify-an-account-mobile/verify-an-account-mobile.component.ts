import { Component, OnInit } from '@angular/core';
import { VerifyAnAccountDesktopComponent } from '../../desktop-signup/verify-an-account-desktop/verify-an-account-desktop.component';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'verify-an-account-mobile',
  templateUrl: './verify-an-account-mobile.component.html',
  styleUrls: ['./verify-an-account-mobile.component.scss']
})
export class VerifyAnAccountMobileComponent extends VerifyAnAccountDesktopComponent implements OnInit {
  constructor(toastr: ToastrService) {
    super(toastr);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
