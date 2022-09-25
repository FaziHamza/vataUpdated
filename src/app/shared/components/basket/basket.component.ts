import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/pages/components/product/product.service';

import { AppSizeStateService } from 'src/app/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketData: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BasketComponent>,
    private productService: ProductService,
    public appSize: AppSizeStateService
  ) {
    if (data) {
      this.basketData = data;
    }
   }

   ngOnInit() {
    console.log(this.basketData);

  }

  onItemDelete() {
    this.productService.getCart().subscribe(data => {
      this.basketData.cartData = data;
      if (this.basketData.cartData && this.basketData.cartData.business_cart.items.length === 0 && this.basketData.cartData.private_cart.items.length === 0) {
        this.dialogRef.close();
      }
      this.productService.updateCart(this.basketData.cartData);
    });
  }

  onContinueShopping(): void {
    this.dialogRef.close();
  }

}
