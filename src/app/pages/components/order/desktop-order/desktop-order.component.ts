import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../product/product.service';
import { UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-desktop-order',
  templateUrl: './desktop-order.component.html',
  styleUrls: ['./desktop-order.component.scss']
})
export class DesktopOrderComponent implements OnInit {
  orderData: any = null;
  isThemeDark: Observable<boolean>;
  businessCartId;
  privateCart;
  constructor(
    private themeService: ThemeService,
    private productService: ProductService,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
    this.productService.getCart().subscribe(data => {
      console.log(data);
      this.orderData = data;
      this.businessCartId = this.orderData.business_cart.id;
      this.privateCart = this.orderData.private_cart.id;
    });
  }

  removeItem(itemId, is_business) {
    this.productService.removeItemFromCart({item_id: itemId, cart_id: this.userService.getCartId(is_business) }).subscribe(() => {
      this.productService.getCart().subscribe(data => {
        this.orderData = data;
      });
    });
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }

  decrement(val, is_business, item_id) {
    const currentVal = val.value;

    if (val.value > 1) {
      val.value--;
    } else {
      val.value = 1;
    }

    this.productService.updateQuantity({cart_id: is_business ? this.businessCartId : this.privateCart, item_id: item_id, Quantity: parseInt(val.value)}).subscribe(res => {
      if (res.details.includes('Insufficient ')) {
        this.toastr.error(res.details);
      } else {
        this.toastr.success(res.details);
      }
      this.productService.getCart().subscribe(data => {
        console.log(data);
        this.orderData = data;
      }, err => {
        val.value = currentVal;
      });
    })
  }

  increment(val, is_business, item_id) {
    const currentVal = val.value;
     val.value++;
     this.productService.updateQuantity({cart_id: is_business ? this.businessCartId : this.privateCart, item_id: item_id, Quantity: parseInt(val.value)}).subscribe(res => {
      if (res.details.includes('Insufficient ')) {
        this.toastr.error(res.details);
      } else {
        this.toastr.success(res.details);
      }
      this.productService.getCart().subscribe(data => {
        console.log(data);
        this.orderData = data;
      });
    }, err => {
      val.value = currentVal;
    })
  }

}
