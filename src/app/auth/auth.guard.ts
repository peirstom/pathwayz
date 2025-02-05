import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, switchMap, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user.pipe(
      take(1),
      switchMap(currentUser => {
        if (!currentUser || !currentUser.token) {
          return this.authService.autoLogin();
        }
        return of(true);
      }),
      tap(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
