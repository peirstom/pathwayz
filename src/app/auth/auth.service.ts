import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, of } from 'rxjs';

import { User } from './user.model';
import { Router } from '@angular/router';
import { StorageService } from '../helpers/storage.service';
import { DialogService } from '../helpers/dialog.service';

const FIREBASE_API_KEY = 'AIzaSyAFJWqaLcuSmSTsELHYVFDuKxGUKV_a-v0';



interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  private _isAuthenticated = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService,
    private dialogService: DialogService
  ) {}

  get user() {
    return this._user.asObservable();
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(errorRes => {
          this.handleError(errorRes.error.error.message);
          return throwError(errorRes);
        }),
        tap(resData => {
          if (resData && resData.idToken) {
            this.handleLogin(
              email,
              resData.idToken,
              resData.localId,
              parseInt(resData.expiresIn, 10)
            );
          }
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_API_KEY}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(errorRes => {
          console.log('error login')
          this.handleError(errorRes.error.error.message);
          return throwError(errorRes);
        }),
        tap(resData => {
          if (resData && resData.idToken) {
            console.log('handlelogin')
            this.handleLogin(
              email,
              resData.idToken,
              resData.localId,
              parseInt(resData.expiresIn, 10)
            );
          }
        })
      );
  }

  logout() {
    this._user.next(null);
    this._isAuthenticated.next(false);
    this.storageService.remove('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.router.navigate(['/home']);
  }

  autoLogin() {
    if (!this.storageService.hasKey('userData')) {
      return of(false);
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(this.storageService.getString('userData'));

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.isAuth) {
      this._user.next(loadedUser);
      this.autoLogout(loadedUser.timeToExpiry);
      return of(true);
    }
    return of(false);
  }

  autoLogout(expiryDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => this.logout(), expiryDuration);
  }

  private handleLogin(
    email: string,
    token: string,
    userId: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.storageService.storeString('userData', JSON.stringify(user));
    this.autoLogout(user.timeToExpiry);
    this._user.next(user);
    this._isAuthenticated.next(true);
  }

  private handleError(errorMessage: string) {
    switch (errorMessage) {
      case 'EMAIL_EXISTS':
        this.dialogService.alert('This email address exists already!');
        break;
      case 'INVALID_PASSWORD':
        this.dialogService.alert('Your password is invalid!');
        break;
      default:
        this.dialogService.alert(
          'Authentication failed, check your credentials.'
        );
    }
  }
}
