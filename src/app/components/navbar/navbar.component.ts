import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ROUTES, SUPPLIER_ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { concat } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  @ViewChild(LoginComponent)
  public login: LoginComponent;

  @ViewChild(RegisterComponent)
  public register: RegisterComponent;

  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    const routes = ROUTES.concat(SUPPLIER_ROUTES);
    this.listTitles = routes.filter(listTitle => listTitle);
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

}
