import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptor } from "./interceptors";

import { ApiService, AuthGuard, JwtService, UserService } from "./services";
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptorService } from './interceptors';
import { TempSignupDataService } from './services';
import { PagesModule } from '../pages/pages.module';
import { LoaderComponent } from './components';

export function getWindow() {
  return window;
}

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      maxOpened: 3,
      positionClass: 'toast-top-right',
      autoDismiss: true,
      newestOnTop: true
    })],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    TempSignupDataService,
    { provide: "window", useFactory: getWindow }
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("Core module could only be injected in the root module");
    }
  }
}
