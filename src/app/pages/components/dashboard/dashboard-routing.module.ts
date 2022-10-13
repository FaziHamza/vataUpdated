import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainerComponent } from './dashboard-container.component';
import { DesktopDashboardProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-profile-outlet/desktop-dashboard-profile-outlet.component';
import { DesktopDashboardPublicProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-public-profile-outlet/desktop-dashboard-public-profile-outlet.component';
import { DesktopDashboardSettingOutletComponent } from './desktop-dashboard/desktop-dashboard-setting-outlet/desktop-dashboard-setting-outlet.component';
import { DesktopDashboardHelpCenterComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-help-center.component';
import { DesktopDashboardHelpOutletComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-help-outlet/desktop-dashboard-help-outlet.component';
import { DesktopDashboardMainOutletComponent } from './desktop-dashboard/desktop-dashboard-help-center/desktop-dashboard-main-outlet/desktop-dashboard-main-outlet.component';
import { DesktopDashboardBookingOutletComponent } from './desktop-dashboard/desktop-dashboard-booking-outlet/desktop-dashboard-booking-outlet.component';
import { DesktopPublicProfileMainComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-main/desktop-public-profile-main.component';
import { DesktopPublicProfileNewMemberComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-new-member/desktop-public-profile-new-member.component';
import { DesktopPublicProfileEditMemberComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-edit-member/desktop-public-profile-edit-member.component';
import { DesktopPublicProfileAddBlacklistComponent } from './desktop-dashboard/desktop-dashboard-public-profile/desktop-public-profile-add-blacklist/desktop-public-profile-add-blacklist.component';
import { DesktopDashboardEditPublicProfileOutletComponent } from './desktop-dashboard/desktop-dashboard-edit-public-profile-outlet/desktop-dashboard-edit-public-profile-outlet.component';
import { DesktopDashboardBookingCompanyComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-dashboard-booking-company.component';
import { DesktopBookingCompanyAddEditServiceComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-booking-company-add-edit-service/desktop-booking-company-add-edit-service.component';
import { DesktopBookingComanyInfoMainComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-company/desktop-booking-comany-info-main/desktop-booking-comany-info-main.component';
import { DesktopDashboardClientDetailsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-client-details/desktop-dashboard-client-details.component';
import { DesktopDashboardClientEditProfileComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-client-edit-profile/desktop-dashboard-client-edit-profile.component';
import { DesktopDashboardNewClientComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-clients/desktop-dashboard-new-client/desktop-dashboard-new-client.component';
import { DesktopDashboardBookingVisitsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-dashboard-booking-visits.component';
import { DesktopBookingVisitsStatsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-visits-stats/desktop-booking-visits-stats.component';
import { DesktopBookingNewVisitComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-new-visit/desktop-booking-new-visit.component';
import { DesktopBookingNewClientComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-new-client/desktop-booking-new-client.component';
import { DesktopBookingConfirmVisitComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-visits/desktop-booking-confirm-visit/desktop-booking-confirm-visit.component';
import { UserDataResolverService } from 'src/app/core/services/user-data-resolver.service';
import { DesktopBookingEditMemberComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-edit-member/desktop-booking-edit-member.component';
import { DesktopBookingNewMemberComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-new-member/desktop-booking-new-member.component';
import { DesktopBookingMemberDetailsComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-booking-member-details/desktop-booking-member-details.component';
import { DesktopDashboardBookingSalesComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-sales/desktop-dashboard-booking-sales.component';
import { DesktopDashboardBookingMembersComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-members/desktop-dashboard-booking-members.component';
import { DesktopDashboardBookingForPrivateComponent } from './desktop-dashboard/desktop-dashboard-booking/desktop-dashboard-booking-for-private/desktop-dashboard-booking-for-private.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardContainerComponent,
    resolve: {
      data: UserDataResolverService
    },
    children: [
      {
        path: '',
        component: DesktopDashboardPublicProfileOutletComponent,
        children: [
          {
            path: '',
            redirectTo: 'main'
          },
          {
            path: 'main',
            component: DesktopPublicProfileMainComponent,
          },
          {
            path: 'new-member',
            component: DesktopPublicProfileNewMemberComponent,
          },
          {
            path: 'edit-member',
            component: DesktopPublicProfileEditMemberComponent,
          },
          {
            path: 'add-blacklist',
            component: DesktopPublicProfileAddBlacklistComponent,
          },
        ]
      },
      {
        path: 'dashboard-profile',
        component: DesktopDashboardProfileOutletComponent,
      },
      
      {
        path: 'dashboard-setting',
        component: DesktopDashboardSettingOutletComponent,
      },
      {
        path: 'dashboard-booking',
        component: DesktopDashboardBookingOutletComponent,
        children: [
          {
            path: '',
            redirectTo: 'visits',
          },
          {
            path: 'clients',
            component: DesktopDashboardClientDetailsComponent,
            children: [
              {
                path: '',
                component: DesktopDashboardClientDetailsComponent,
              },
              {
                path: 'new-client',
                component: DesktopDashboardNewClientComponent,
              },
              {
                path: 'edit-client',
                component: DesktopDashboardClientEditProfileComponent,
              },
            ]
          },
          // {
          //   path: 'visits',
          //   component: DesktopDashboardBookingVisitsComponent,
          //   children: [
          //     {
          //       path: '',
          //       redirectTo: 'visit-stats',
          //     },
          //     {
          //       path: 'visit-stats',
          //       component: DesktopBookingVisitsStatsComponent,
          //     },
          //     {
          //       path: 'new-visit',
          //       component: DesktopBookingNewVisitComponent,
          //     },
          //     {
          //       path: 'new-client',
          //       component: DesktopBookingNewClientComponent,
          //     },
          //     {
          //       path: 'confirm-visit',
          //       component: DesktopBookingConfirmVisitComponent,
          //     },
          //   ]
          // },
          {
            path: 'clients',

            component: DesktopDashboardClientDetailsComponent,
            children: [
              {
                path: '',

                component: DesktopDashboardClientDetailsComponent,
              },
              {
                path: 'new-client',

                component: DesktopDashboardNewClientComponent,
              },
              {
                path: 'edit-client',

                component: DesktopDashboardClientEditProfileComponent,
              },
            ]

          },
          {
            path: 'visits',
            component: DesktopDashboardBookingVisitsComponent,
            children: [
              {
                path: '',
                component: DesktopBookingVisitsStatsComponent,
              },
              {
                path: 'visit-stats',
                component: DesktopBookingVisitsStatsComponent,
              },
              {
                path: 'new-visit',
                component: DesktopBookingNewVisitComponent,
              },
              {
                path: 'booking-sale',
                component: DesktopDashboardBookingSalesComponent,
              },
              {
                path: 'member',
                component: DesktopDashboardBookingMembersComponent,
              },
              {
                path: 'private',
                component: DesktopDashboardBookingForPrivateComponent,
              },
            ]
          },
          {
            path: 'company-info',
            component: DesktopDashboardBookingCompanyComponent,
            children: [
              {
                path: '',
                component: DesktopBookingComanyInfoMainComponent,
              },
              {
                path: 'info',
                component: DesktopBookingComanyInfoMainComponent,
              },
              {
                path: 'add-edit-service',
                component: DesktopBookingCompanyAddEditServiceComponent,
              },
            ]
          }
        ]
      },
      {
        path: 'dashboard-help-center',
        component: DesktopDashboardHelpCenterComponent,
        children: [
          {
            path: '',
            component: DesktopDashboardHelpOutletComponent,
          },
          {
            path: 'help',
            component: DesktopDashboardHelpOutletComponent,
          },
          {
            path: 'main',
            component: DesktopDashboardMainOutletComponent,
          },
        ]
      },
      {
        path: 'dashboard-edit-public-profile',
        component: DesktopDashboardEditPublicProfileOutletComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
