import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';
import { DesktopAddProductComponent } from '../desktop-add-product/desktop-add-product.component';
import { UserService } from 'src/app/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../product/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AddProductVariationService } from '../../add-product-variation/add-product-variation.service';


@Component({
  selector: 'app-mobile-add-product',
  templateUrl: './mobile-add-product.component.html',
  styleUrls: ['./mobile-add-product.component.scss']
})
export class MobileAddProductComponent extends DesktopAddProductComponent implements OnInit {

  constructor(
    themeService: ThemeService,
    userService: UserService,
    formBuilder: FormBuilder,
    productService: ProductService,
    toastrService: ToastrService,
    router: Router,
    variationService: AddProductVariationService
  ) {
    super(themeService, userService, formBuilder, productService, toastrService, router, variationService);
   }

  ngOnInit() {
    super.ngOnInit();
  }
}
