import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from './directives/';
import { MaterialModule } from './modules/material.module';
import { PasswordToggleDirective } from './directives/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SanitizePipe } from './pipes';
import { MobileHeaderComponent, MobileFooterComponent, OldHeaderComponent, FooterComponent } from './layout';
import { ThemeService } from './services/theme/theme.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MarketplaceProductCardComponent } from './components/';
import { BookingCardComponent } from './components/';
import { StarRatingComponent } from './components/';
import { MustMatchDirective } from './directives/';
import { CheckEmailExistsDirective } from './directives/';
import { CategoryCardComponent } from './components/';
import { BannerComponent } from './components/';
import { TopDealsCardComponent } from './components/';
import { SearchDropdownComponent } from './layout/';
import { MarketplaceCardListViewComponent } from './components/';
import { ToggleViewComponent } from './components/';
import { FilterModalComponent } from './components/';
import { SaveSearchModalComponent } from './components/';
import { MidBarComponent } from './components/';
import { AlertModalComponent } from './components/';
import { AskQuestionModalComponent } from './components/';
import { BiddingListModalComponent } from './components/';
import { WriteReviewModalComponent } from './components/';
import { AskForChangeModalComponent } from './components/';
import { ProductPreviewComponent } from './components/';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TimeAgoPipe } from './pipes/';
import { TimeLeftPipe } from './pipes/';
import { BasketComponent } from './components/';
import { FileUploadComponent } from './components/';
import { NgxFileDropModule } from "ngx-file-drop";
import { BasketItemComponent } from './components/';
import { SocialShareModalComponent } from './components/';
import { BarRatingComponent } from './components/';
import { ToggleSectionAccordianDirective } from './directives/';
import { DesktopDashboardHeaderComponent } from './layout/desktop-dashboard-header/desktop-dashboard-header.component';
import { DashboardFeesToPayNegativePaymentComponent } from './components/dashboard-fees-to-pay-negative-payment/dashboard-fees-to-pay-negative-payment.component';
import { WriteReviewModalV2Component } from './components/write-review-modal-v2/write-review-modal-v2.component';
import { BookingsFilterModalComponent } from './components/bookings-filter-modal/bookings-filter-modal.component';
import { CalendarSliderComponent } from './components/calendar-slider/calendar-slider.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LightboxModule } from 'ngx-lightbox';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { CheckoutFeesToPayComponent } from './components/checkout-fees-to-pay/checkout-fees-to-pay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    SlickCarouselModule,
    NgxFileDropModule,
    NgxImageZoomModule,
    LightboxModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  declarations: [
    ShowAuthedDirective,
    PasswordToggleDirective,
    FooterComponent, 
    HeaderComponent,
    SanitizePipe,
    MobileHeaderComponent,
    MobileFooterComponent,
    SidebarComponent,
    HeaderComponent,
    OldHeaderComponent,
    MarketplaceProductCardComponent,
    BookingCardComponent,
    StarRatingComponent,
    MustMatchDirective,
    CheckEmailExistsDirective,
    CategoryCardComponent,
    BannerComponent,
    TopDealsCardComponent,
    SearchDropdownComponent,
    MarketplaceCardListViewComponent,
    ToggleViewComponent,
    FilterModalComponent,
    SaveSearchModalComponent,
    MidBarComponent,
    AlertModalComponent,
    AskQuestionModalComponent,
    BiddingListModalComponent,
    WriteReviewModalComponent,
    AskForChangeModalComponent,
    ProductPreviewComponent,
    TimeAgoPipe,
    TimeLeftPipe,
    BasketComponent,
    FileUploadComponent,
    BasketItemComponent,
    SocialShareModalComponent,
    BarRatingComponent,
    ToggleSectionAccordianDirective,
    DesktopDashboardHeaderComponent,
    DashboardFeesToPayNegativePaymentComponent,
    WriteReviewModalV2Component,
    BookingsFilterModalComponent,
    CalendarSliderComponent,
    AddServiceComponent,
    MenuItemComponent,
    CheckoutFeesToPayComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FooterComponent, 
    HeaderComponent,
    ShowAuthedDirective,
    PasswordToggleDirective,
    SanitizePipe,
    TimeAgoPipe,
    TimeLeftPipe,
    MobileFooterComponent,
    MobileHeaderComponent,
    SidebarComponent,
    HeaderComponent,
    OldHeaderComponent,
    MarketplaceProductCardComponent,
    BookingCardComponent,
    StarRatingComponent,
    MustMatchDirective,
    CheckEmailExistsDirective,
    CategoryCardComponent,
    BannerComponent,
    TopDealsCardComponent,
    MarketplaceCardListViewComponent,
    ToggleViewComponent,
    FilterModalComponent,
    SearchDropdownComponent,
    MidBarComponent,
    ProductPreviewComponent,
    BasketComponent,
    FileUploadComponent,
    SocialShareModalComponent,
    BarRatingComponent,
    DesktopDashboardHeaderComponent,
    ToggleSectionAccordianDirective,
    DashboardFeesToPayNegativePaymentComponent,
    AlertModalComponent,
    CalendarSliderComponent,
    AddServiceComponent,
    Ng5SliderModule,
    MenuItemComponent,
    CheckoutFeesToPayComponent,
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule {}
