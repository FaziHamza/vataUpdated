import { Component, OnInit } from '@angular/core';
import { DesktopCustomerQuestionsAndAnswersComponent } from '../../product-web/desktop-customer-questions-and-answers/desktop-customer-questions-and-answers.component';
import { ProductService } from '../../product.service';
import { UserService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-customer-questions-and-answers',
  templateUrl: './mobile-customer-questions-and-answers.component.html',
  styleUrls: ['./mobile-customer-questions-and-answers.component.scss']
})
export class MobileCustomerQuestionsAndAnswersComponent extends DesktopCustomerQuestionsAndAnswersComponent implements OnInit {

  constructor(
    dialog: MatDialog,
    productService: ProductService,
    userService: UserService
  ) { 
    super(dialog, productService, userService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
