import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ROUTES, SUPPLIER_ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { concat, Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { DataService, User } from '../../services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public focus;
  public listTitles: any[];
  public location: Location;

  //public isAuthenticated = false;
  loggedIn = false;
  loggedInSubsription: Subscription;
public user: User;

  @ViewChild(LoginComponent)
  public login: LoginComponent;

  @ViewChild(RegisterComponent)
  public register: RegisterComponent;

  constructor(location: Location,  private authService: AuthService, private dataService: DataService) {
    this.location = location;
    //this.authService.isAuthenticated.subscribe((res) => {
      //this.isAuthenticated = res;
    //});
  }

  ngOnInit() {
    const routes = ROUTES.concat(SUPPLIER_ROUTES);
    this.listTitles = routes.filter(listTitle => listTitle);
    this.loggedInSubsription = this.authService.user.subscribe(user => {
      this.loggedIn = !!(user && user.token) ;
      if (this.loggedIn) {
        this.user = this.dataService.getUser();
      }
    });
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 2 );
    }
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  openLogin() {
    this.login.open();
  }

  openRegistration() {
    this.register.open();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.loggedInSubsription) {
      this.loggedInSubsription.unsubscribe();
    }
  }
}
