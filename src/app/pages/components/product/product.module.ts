import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule, TimeLeftPipe } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductRoutingModule } from './product-routing.module';
import { ProductWebComponent } from './product-web/product-web.component';
import { ProductMobileComponent } from './product-mobile/product-mobile.component';
import { ProductContainerComponent } from './product-container.component';

import { AlertModalComponent } from '../../../shared/components/alert-modal/alert-modal.component';
import { AskQuestionModalComponent } from '../../../shared/components/ask-question-modal/ask-question-modal.component';
import { BiddingListModalComponent } from '../../../shared/components/bidding-list-modal/bidding-list-modal.component';
import { AskForChangeModalComponent } from '../../../shared/components/ask-for-change-modal/ask-for-change-modal.component';
import { WriteReviewModalComponent } from '../../../shared/components/write-review-modal/write-review-modal.component';
import { BasketComponent } from '../../../shared/components/basket/basket.component';
import { DesktopCustomerReviewsComponent } from './product-web/desktop-customer-reviews/desktop-customer-reviews.component';
import { LightboxModule } from 'ngx-lightbox';
import { DesktopCustomerQuestionsAndAnswersComponent } from './product-web/desktop-customer-questions-and-answers/desktop-customer-questions-and-answers.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MobileCustomerReviewsComponent } from './product-mobile/mobile-customer-reviews/mobile-customer-reviews.component';
import { MobileCustomerQuestionsAndAnswersComponent } from './product-mobile/mobile-customer-questions-and-answers/mobile-customer-questions-and-answers.component';
import { DesktopProductComponent } from './desktop-product/desktop-product.component';
import { DesktopAddProductComponent } from './desktop-product/desktop-add-product/desktop-add-product.component';
import { MobileProductComponent } from './mobile-product/mobile-product.component';
import { SocialShareModalComponent } from 'src/app/shared/components/social-share-modal/social-share-modal.component';
import { DesktopAddMarketplaceComponent } from './desktop-product/desktop-add-product/desktop-add-marketplace/desktop-add-marketplace.component';
import { MobileAddProductComponent } from './mobile-product/mobile-add-product/mobile-add-product.component';


@NgModule({
  declarations: [
    ProductWebComponent, 
    ProductMobileComponent, 
    ProductContainerComponent, 
    DesktopCustomerReviewsComponent, 
    DesktopCustomerQuestionsAndAnswersComponent, 
    MobileCustomerReviewsComponent, 
    MobileCustomerQuestionsAndAnswersComponent, 
    DesktopProductComponent, 
    DesktopAddProductComponent, 
    MobileProductComponent, 
    DesktopAddMarketplaceComponent, MobileAddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    LightboxModule,
    SlickCarouselModule
  ],
  entryComponents: [
    AlertModalComponent,
    AskQuestionModalComponent,
    BiddingListModalComponent,
    AskForChangeModalComponent,
    WriteReviewModalComponent,
    BasketComponent,
    SocialShareModalComponent
  ],
  providers: [
    TimeLeftPipe
  ]
})
export class ProductModule { }
