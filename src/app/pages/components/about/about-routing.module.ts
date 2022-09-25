import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainerComponent } from './about-container.component';
import { DesktopBlogComponent } from './desktop-about/desktop-blog/desktop-blog.component';
import { DesktopSolutionsComponent } from './desktop-about/desktop-solutions/desktop-solutions.component';
import { DesktopFaqComponent } from './desktop-about/desktop-faq/desktop-faq.component';
import { DesktopTermsOfUseComponent } from './desktop-about/desktop-terms-of-use/desktop-terms-of-use.component';
import { DesktopPhilosophyComponent } from './desktop-about/desktop-philosophy/desktop-philosophy.component';
import { DesktopContactUsComponent } from './desktop-about/desktop-contact-us/desktop-contact-us.component';
import { DesktopHelpCenterComponent } from './desktop-about/desktop-help-center/desktop-help-center.component';
import { DesktopHelpCenterDetailsComponent } from './desktop-about/desktop-help-center/desktop-help-center-details/desktop-help-center-details.component';
import { DesktopBlogDetailsComponent } from './desktop-about/desktop-blog/desktop-blog-details/desktop-blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: AboutContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
      },
      {
        path: 'blog',
        component: DesktopBlogComponent,
        children: [
          {
            path: 'detail',
            component: DesktopBlogDetailsComponent
          }
        ]
      },
      {
        path: 'solutions',
        component: DesktopSolutionsComponent
      },
      {
        path: 'faq',
        component: DesktopFaqComponent
      },
      {
        path: 'terms-of-use',
        component: DesktopTermsOfUseComponent
      },
      {
        path: 'philosophy',
        component: DesktopPhilosophyComponent
      },
      {
        path: 'contact-us',
        component: DesktopContactUsComponent
      },
      {
        path: 'help-center',
        component: DesktopHelpCenterComponent,
        children: [
          {
            path: 'detail',
            component: DesktopHelpCenterDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
