import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  showWarning = false;
  @Input() item;
  @Input() isBusiness;
  @Output() itemDeleted = new EventEmitter();


  constructor(private userService: UserService, private productService: ProductService, public appSize: AppSizeStateService) { }

  ngOnInit() {
    console.log(this.item);
  }

  removeItem(itemId, is_business) {
    this.productService.removeItemFromCart({item_id: itemId, cart_id: this.userService.getCartId(is_business) }).subscribe(() => {
      this.itemDeleted.emit();
    });
  }
}
