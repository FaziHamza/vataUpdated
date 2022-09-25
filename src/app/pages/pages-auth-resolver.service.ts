import { Injectable } from '@angular/core';
import { UserService } from '../core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesAuthResolverService {

  constructor(
    private userService: UserService
  ) {}

  resolve(
  ): Observable<boolean> {

    return this.userService.isAuthenticated.pipe(take(1));

  }
}
