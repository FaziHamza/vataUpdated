import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketComponent } from './shared/components/basket/basket.component';
import { BasketItemComponent } from './shared/components/basket/basket-item/basket-item.component';
import { DashboardFeesToPayNegativePaymentComponent } from './shared/components/dashboard-fees-to-pay-negative-payment/dashboard-fees-to-pay-negative-payment.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ThemeService } from './shared/services/theme/theme.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    BasketComponent,
    BasketItemComponent,
    DashboardFeesToPayNegativePaymentComponent
  ]
})

export class AppModule {
  constructor(private themeService: ThemeService) {}
  checkDarkMode() {
    var dark = localStorage.getItem('dark');    
    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }
}
