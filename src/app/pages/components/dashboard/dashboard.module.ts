import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertModalComponent } from '../../../shared/components/alert-modal/alert-modal.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DesktopDashboardComponent } from './desktop-dashboard/desktop-dashboard.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { DesktopDashboardProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-profile-outlet/desktop-dashboard-profile-outlet.component';
import { DesktopDashboardProfileComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-dashboard-profile.component';
import { MobileDashboardProfileComponent } from './mobile-dashboard/mobile-dashboard-profile/mobile-dashboard-profile.component';
import { DesktopProfileFavoritesComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-favorites/desktop-profile-favorites.component';
import { DesktopProfileRatingReviewsComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-rating-reviews/desktop-profile-rating-reviews.component';
import { DesktopProfileCouponsComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-coupons/desktop-profile-coupons.component';
import { DesktopProfileCouponsNewComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-coupons-new/desktop-profile-coupons-new.component';
import { DesktopProfileShippingComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-shipping/desktop-profile-shipping.component';
import { DesktopProfileRewardsComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-rewards/desktop-profile-rewards.component';
import { RewardPointsComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-rewards/reward-points/reward-points.component';
import { DesktopProfileDonateComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-donate/desktop-profile-donate.component';
import { DesktopProfileMembershipComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-membership/desktop-profile-membership.component';
import { DesktopProfileInvoicesComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-invoices/desktop-profile-invoices.component';
import { DesktopProfileFeesPayPostilComponent } from './desktop-dashboard/desktop-dashboard-profile/desktop-profile-fees-pay-postil/desktop-profile-fees-pay-postil.component';
import { DesktopDashboardPublicProfileComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-dashboard-public-profile.component';
import { DesktopDashboardPublicProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-public-profile-outlet/desktop-dashboard-public-profile-outlet.component';
import { MobileDashboardPublicProfileComponent } from './mobile-dashboard/mobile-dashboard-public-profile/mobile-dashboard-public-profile.component';
import { DesktopDashboardSettingOutletComponent } from './desktop-dashboard/desktop-dashboard-setting-outlet/desktop-dashboard-setting-outlet.component';
import { DesktopDashboardSettingComponent } from './desktop-dashboard/desktop-dashboard-setting/desktop-dashboard-setting.component';
import { MobileDashboardSettingComponent } from './mobile-dashboard/mobile-dashboard-setting/mobile-dashboard-setting.component';
import { DesktopDashboardHelpCenterComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-help-center.component';
import { DesktopDashboardHelpOutletComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-help-outlet/desktop-dashboard-help-outlet.component';
import { DesktopDashboardHelpComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-help/desktop-dashboard-help.component';
import { DesktopDashboardMainOutletComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-main-outlet/desktop-dashboard-main-outlet.component';
import { DesktopDashboardMainComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-main/desktop-dashboard-main.component';
import { MobileDashboardMainComponent } from './mobile-dashboard/mobile-dashboard-help-center/mobile-dashboard-main/mobile-dashboard-main.component';
import { MobileDashboardHelpComponent } from './mobile-dashboard/mobile-dashboard-help-center/mobile-dashboard-help/mobile-dashboard-help.component';
import { MobileDashboardHelpCenterComponent } from './mobile-dashboard/mobile-dashboard-help-center/mobile-dashboard-help-center.component';
import { MobileDashboardOrderCallComponent } from './mobile-dashboard/mobile-dashboard-help-center/mobile-dashboard-order-call/mobile-dashboard-order-call.component';
import { DesktopDashboardBookingComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking.component';
import { DesktopDashboardBookingOutletComponent } from './desktop-dashboard/desktop-dashboard-booking-outlet/desktop-dashboard-booking-outlet.component';
import { MobileDashboardBookingComponent } from './mobile-dashboard/mobile-dashboard-booking/mobile-dashboard-booking.component';
import { DesktopDashboardBookingClientsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-booking-clients.component';
import { DesktopDashboardAllClientsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-all-clients/desktop-dashboard-all-clients.component';
import { DesktopDashboardClientDetailsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-client-details/desktop-dashboard-client-details.component';
import { DesktopDashboardClientEditProfileComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-client-edit-profile/desktop-dashboard-client-edit-profile.component';
import { DesktopDashboardNewClientComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-new-client/desktop-dashboard-new-client.component';
import { DesktopPublicProfileInfoComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-info/desktop-public-profile-info.component';
import { DesktopPublicProfileRatingDurationComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-rating-duration/desktop-public-profile-rating-duration.component';
import { DesktopPublicProfileFamilyMemberComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-family-member/desktop-public-profile-family-member.component';
import { DesktopPublicProfileMarketplaceComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-marketplace/desktop-public-profile-marketplace.component';
import { DesktopPublicProfileUserBlockComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-user-block/desktop-public-profile-user-block.component';
import { DesktopPublicProfileDealsComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-deals/desktop-public-profile-deals.component';
import { DesktopPublicProfileBookingComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-booking/desktop-public-profile-booking.component';
import { DesktopDashboardBookingForPrivateComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-for-private/desktop-dashboard-booking-for-private.component';
import { DesktopDashboardBookingMarketingComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-marketing/desktop-dashboard-booking-marketing.component';
import { DesktopDashboardAllServicesComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-marketing/desktop-dashboard-all-services/desktop-dashboard-all-services.component';
import { DesktopPublicProfileMainComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-main/desktop-public-profile-main.component';
import { DesktopPublicProfileNewMemberComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-new-member/desktop-public-profile-new-member.component';
import { DesktopPublicProfileEditMemberComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-edit-member/desktop-public-profile-edit-member.component';
import { DesktopPublicProfileAddBlacklistComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-add-blacklist/desktop-public-profile-add-blacklist.component';
import { DesktopDashboardEditPublicProfileComponent } from './desktop-dashboard/desktop-dashboard-edit-public-profile/desktop-dashboard-edit-public-profile.component';
import { DesktopDashboardEditPublicProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-edit-public-profile-outlet/desktop-dashboard-edit-public-profile-outlet.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DesktopDashboardBookingStatisticsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-statistics/desktop-dashboard-booking-statistics.component';
import { DesktopDashboardBookingPortfolioComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-portfolio/desktop-dashboard-booking-portfolio.component';
import { DesktopDashboardBookingCompanyComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-dashboard-booking-company.component';
import { DesktopBookingCompanyAddEditServiceComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-booking-company-add-edit-service/desktop-booking-company-add-edit-service.component';
import { DesktopBookingComanyInfoMainComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-booking-comany-info-main/desktop-booking-comany-info-main.component';
import { DesktopDashboardBookingSettingsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-settings/desktop-dashboard-booking-settings.component';
import { DesktopDashboardBookingMembersComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-dashboard-booking-members.component';
import { DesktopBookingEditMemberComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-edit-member/desktop-booking-edit-member.component';
import { DesktopBookingNewMemberComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-new-member/desktop-booking-new-member.component';
import { DesktopBookingMemberDetailsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-member-details/desktop-booking-member-details.component';
import { DesktopBookingAllMembersComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-all-members/desktop-booking-all-members.component';
import { DesktopDashboardBookingReviewsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-reviews/desktop-dashboard-booking-reviews.component';
import { DesktopBookingReviewRatingsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-reviews/desktop-booking-review-ratings/desktop-booking-review-ratings.component';
import { DesktopBookingAllReviewsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-reviews/desktop-booking-all-reviews/desktop-booking-all-reviews.component';
import { DesktopDashboardBookingSalesComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-sales/desktop-dashboard-booking-sales.component';
import { DesktopDashboardBookingVisitsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-dashboard-booking-visits.component';
import { DesktopBookingVisitsStatsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-visits-stats/desktop-booking-visits-stats.component';
import { DesktopBookingNewVisitComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-new-visit/desktop-booking-new-visit.component';
import { DesktopBookingNewClientComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-new-client/desktop-booking-new-client.component';
import { DesktopBookingConfirmVisitComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-confirm-visit/desktop-booking-confirm-visit.component';
import { LightboxModule } from 'ngx-lightbox';
// import { NgxTuiCalendarModule } from 'ngx-tui-calendar';
import { DesktopDashboardWidgetsComponent } from './desktop-dashboard/desktop-dashboard-widgets/desktop-dashboard-widgets.component';
import { WidgetsProfileComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-profile/widgets-profile.component';
import { WidgetsRewardPointsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-reward-points/widgets-reward-points.component';
import { WidgetsQuickSettingsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-quick-settings/widgets-quick-settings.component';
import { WidgetsDonatePotComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-donate-pot/widgets-donate-pot.component';
import { WidgetsMySaleComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-my-sale/widgets-my-sale.component';
import { WidgetsPublicProfileComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-public-profile/widgets-public-profile.component';
import { WidgetsOpenItemsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-open-items/widgets-open-items.component';
import { WidgetsOpenBookingComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-open-booking/widgets-open-booking.component';
import { WidgetsOpenDealsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-open-deals/widgets-open-deals.component';
import { WidgetsNewsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-news/widgets-news.component';
import { WidgetsSavedSearchesComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-saved-searches/widgets-saved-searches.component';
import { WidgetsFavoriteBusinessComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-favorite-business/widgets-favorite-business.component';
import { WidgetsMyShopsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-my-shops/widgets-my-shops.component';
import { WidgetsNextAppointmentComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-next-appointment/widgets-next-appointment.component';
import { WidgetsReviewsComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-reviews/widgets-reviews.component';
import { WidgetsFeesToPayComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-fees-to-pay/widgets-fees-to-pay.component';
import { WidgetsCommunicationComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-communication/widgets-communication.component';
import { WidgetsMyFavoriteComponent } from './desktop-dashboard/desktop-dashboard-widgets/widgets-my-favorite/widgets-my-favorite.component';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [DashboardContainerComponent, DesktopDashboardComponent, MobileDashboardComponent, DesktopDashboardProfileOutletComponent, DesktopDashboardProfileComponent, MobileDashboardProfileComponent, DesktopProfileFavoritesComponent, DesktopProfileRatingReviewsComponent, DesktopProfileCouponsComponent, DesktopProfileCouponsNewComponent, DesktopProfileShippingComponent, DesktopProfileRewardsComponent, RewardPointsComponent, DesktopProfileDonateComponent, DesktopProfileMembershipComponent, DesktopProfileInvoicesComponent, DesktopProfileFeesPayPostilComponent, DesktopDashboardPublicProfileComponent, DesktopDashboardPublicProfileOutletComponent, MobileDashboardPublicProfileComponent, DesktopDashboardSettingOutletComponent, DesktopDashboardSettingComponent, MobileDashboardSettingComponent, DesktopDashboardHelpCenterComponent, DesktopDashboardHelpOutletComponent, DesktopDashboardHelpComponent, DesktopDashboardMainOutletComponent, DesktopDashboardMainComponent, MobileDashboardMainComponent, MobileDashboardHelpComponent, MobileDashboardHelpCenterComponent, MobileDashboardOrderCallComponent, DesktopDashboardBookingComponent, DesktopDashboardBookingOutletComponent, MobileDashboardBookingComponent, DesktopDashboardBookingClientsComponent, DesktopDashboardAllClientsComponent, DesktopDashboardClientDetailsComponent, DesktopDashboardClientEditProfileComponent, DesktopDashboardNewClientComponent, DesktopPublicProfileInfoComponent, DesktopPublicProfileRatingDurationComponent, DesktopPublicProfileFamilyMemberComponent, DesktopPublicProfileMarketplaceComponent, DesktopPublicProfileUserBlockComponent, DesktopPublicProfileDealsComponent, DesktopPublicProfileBookingComponent, DesktopDashboardBookingForPrivateComponent, DesktopDashboardBookingMarketingComponent, DesktopDashboardAllServicesComponent, DesktopPublicProfileMainComponent, DesktopPublicProfileNewMemberComponent, DesktopPublicProfileEditMemberComponent, DesktopPublicProfileAddBlacklistComponent, DesktopDashboardEditPublicProfileComponent, DesktopDashboardEditPublicProfileOutletComponent, DesktopDashboardBookingStatisticsComponent, DesktopDashboardBookingPortfolioComponent, DesktopDashboardBookingCompanyComponent, DesktopBookingCompanyAddEditServiceComponent, DesktopBookingComanyInfoMainComponent, DesktopDashboardBookingSettingsComponent, DesktopDashboardBookingMembersComponent, DesktopBookingEditMemberComponent, DesktopBookingNewMemberComponent, DesktopBookingMemberDetailsComponent, DesktopBookingAllMembersComponent, DesktopDashboardBookingReviewsComponent, DesktopBookingReviewRatingsComponent, DesktopBookingAllReviewsComponent, DesktopDashboardBookingSalesComponent, DesktopDashboardBookingVisitsComponent, DesktopBookingVisitsStatsComponent, DesktopBookingNewVisitComponent, DesktopBookingNewClientComponent, DesktopBookingConfirmVisitComponent, DesktopDashboardWidgetsComponent, WidgetsProfileComponent, WidgetsRewardPointsComponent, WidgetsQuickSettingsComponent, WidgetsDonatePotComponent, WidgetsMySaleComponent, WidgetsPublicProfileComponent, WidgetsOpenItemsComponent, WidgetsOpenBookingComponent, WidgetsOpenDealsComponent, WidgetsNewsComponent, WidgetsSavedSearchesComponent, WidgetsFavoriteBusinessComponent, WidgetsMyShopsComponent, WidgetsNextAppointmentComponent, WidgetsReviewsComponent, WidgetsFeesToPayComponent, WidgetsCommunicationComponent, WidgetsMyFavoriteComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    // NgxTuiCalendarModule.forRoot(),
    SlickCarouselModule,
    LightboxModule,
    MaterialModule,
    FlexLayoutModule,
    DragulaModule,
    NgApexchartsModule
  ],
  providers: [DragulaService],
  entryComponents: [
    AlertModalComponent
  ]
})
export class DashboardModule { }
