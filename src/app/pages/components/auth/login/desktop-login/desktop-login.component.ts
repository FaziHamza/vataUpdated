import { Component, OnInit } from '@angular/core';
import { MobileLoginComponent } from '../mobile-login/mobile-login.component';
import { ApiService, UserService, TempSignupDataService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pattern } from 'src/app/shared/regex.pattern';
import { Subscription, forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../../../../../shared/services/theme/theme.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../../product/product.service';

@Component({
  selector: 'app-desktop-login',
  templateUrl: './desktop-login.component.html',
  styleUrls: ['./desktop-login.component.scss']
})
export class DesktopLoginComponent implements OnInit {
  subscription: Subscription = new Subscription();
  loginForm: FormGroup;
  submitted: boolean = false;

  logoDark: boolean = false;

  isThemeDark: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private productService: ProductService,
    private router: Router,
    private tempSignup: TempSignupDataService,
    private toastrService: ToastrService) {
      window.localStorage.removeItem('jwtToken');
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('dark');
   }

  ngOnInit() {
    this.userService.clearSignupTempData();
    this.tempSignup.clearData();
    this.isThemeDark = this.themeService.isThemeDark;

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.subscription.add(this.apiService.post(ApiEndPoints.AUTH.LOGIN, {username: this.loginForm.value.email, password: this.loginForm.value.password}).subscribe(res => {
        this.userService.setAuth(res.data);
        this.addTemporaryItemsToCart()        
        this.submitted = false;
    }, err => {
    this.submitted = false;
    this.toastrService.clear();
      this.toastrService.error('Failed to login. Please check credentials!');
      console.log(err);
    }));

  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDarkTheme(checked) {
    this.themeService.setDarkTheme(checked.checked);
    // console.log("checked >", this.isThemeDark);
    console.log("checked >", checked.checked);
    this.logoDark = checked.checked;
  }

  addTemporaryItemsToCart(){
    let data = JSON.parse(window.localStorage.getItem('temp_cart'));
    if(!data){
      this.router.navigate(['/home']);
      return;
    }
    window.localStorage.removeItem('temp_cart');
    if(data.cart){
      let calls = [];
      data.cart.map((cart) => {
        let cartId = this.userService.getCartId(cart.productData.is_seller_subscribed);
        let payload = {
          cart_id: cartId,
          variant_id: cart.variant_id,
          product_id: cart.product_id
        }
        if(!payload.variant_id.length)
        delete payload.variant_id;
        calls.push(this.apiService.post(ApiEndPoints.PRODUCT.ADD_TO_CART, payload));
      })
      forkJoin(...calls).subscribe((res) => {
        if(res)
          this.productService.updateCart(res[res.length - 1]);
          this.router.navigate(['/order']);
      })
    }
  }

}
