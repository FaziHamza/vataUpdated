import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataResolverService {

  constructor(
    private authService: UserService,
    private apiService: ApiService,
    private jwtService: JwtService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (this.authService.getCurrentUser()) {
      return this.apiService.post('/user/tokenCheck/', {token: this.jwtService.getToken()})
      .subscribe(
        data => {
          if (data.Status === 'Success') {
            this.authService.setAuth(data.data);
            return data.data;
          } else {
            this.authService.purgeAuth();
            return EMPTY;
          }
        },
      );
    }
  }

}
