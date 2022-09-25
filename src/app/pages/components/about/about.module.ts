import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { DesktopAboutComponent } from "./desktop-about/desktop-about.component";
import { MobileAboutComponent } from "./mobile-about/mobile-about.component";
import { AboutContainerComponent } from "./about-container.component";
import { MobileBlogComponent } from "./mobile-about/mobile-blog/mobile-blog.component";
import { MobileContactUsComponent } from "./mobile-about/mobile-contact-us/mobile-contact-us.component";
import { MobileFaqComponent } from "./mobile-about/mobile-faq/mobile-faq.component";
import { MobilePhilosophyComponent } from "./mobile-about/mobile-philosophy/mobile-philosophy.component";
import { MobileSolutionsComponent } from "./mobile-about/mobile-solutions/mobile-solutions.component";
import { MobileTermsOfUseComponent } from "./mobile-about/mobile-terms-of-use/mobile-terms-of-use.component";
import { DesktopPhilosophyComponent } from "./desktop-about/desktop-philosophy/desktop-philosophy.component";
import { DesktopFaqComponent } from "./desktop-about/desktop-faq/desktop-faq.component";
import { DesktopTermsOfUseComponent } from "./desktop-about/desktop-terms-of-use/desktop-terms-of-use.component";
import { DesktopSolutionsComponent } from "./desktop-about/desktop-solutions/desktop-solutions.component";
import { DesktopContactUsComponent } from "./desktop-about/desktop-contact-us/desktop-contact-us.component";
import { DesktopBlogComponent } from "./desktop-about/desktop-blog/desktop-blog.component";
import { DesktopBlogDetailsComponent } from './desktop-about/desktop-blog/desktop-blog-details/desktop-blog-details.component';
import { MobileBlogDetailsComponent } from './mobile-about/mobile-blog/mobile-blog-details/mobile-blog-details.component';
import { MobileHelpCenterComponent } from './mobile-about/mobile-help-center/mobile-help-center.component';
import { DesktopHelpCenterComponent } from './desktop-about/desktop-help-center/desktop-help-center.component';
import { DesktopHelpCenterDetailsComponent } from './desktop-about/desktop-help-center/desktop-help-center-details/desktop-help-center-details.component';
import { MobileHelpCenterDetailsComponent } from './mobile-about/mobile-help-center/mobile-help-center-details/mobile-help-center-details.component';
import { DesktopAboutSidebarComponent } from './desktop-about/desktop-about-sidebar/desktop-about-sidebar.component';
import { MaterialModule, SharedModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DesktopAboutComponent,
    AboutContainerComponent,
    MobileAboutComponent,
    MobileBlogComponent,
    MobileContactUsComponent,
    MobileFaqComponent,
    MobilePhilosophyComponent,
    MobileSolutionsComponent,
    MobileTermsOfUseComponent,
    DesktopPhilosophyComponent,
    DesktopFaqComponent,
    DesktopTermsOfUseComponent,
    DesktopSolutionsComponent,
    DesktopContactUsComponent,
    DesktopBlogComponent,
    DesktopBlogDetailsComponent,
    MobileBlogDetailsComponent,
    MobileHelpCenterComponent,
    DesktopHelpCenterComponent,
    DesktopHelpCenterDetailsComponent,
    MobileHelpCenterDetailsComponent,
    DesktopAboutSidebarComponent
  ],
  imports: [CommonModule, AboutRoutingModule, MaterialModule, FlexLayoutModule, SharedModule],
})
export class AboutModule {}
