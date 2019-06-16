import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'fas fa-tv', class: '' },
    { path: '/tenders', title: 'Tenders',  icon: 'far fa-paper-plane', class: '' },
    { path: '/messages', title: 'Messages',  icon: 'far fa-envelope', class: '' },
    { path: '/favorites', title: 'Favorites',  icon: 'far fa-heart', class: '' },
    { path: '/history', title: 'History',  icon: 'ni-archive-2', class: '' },
];

export const SUPPLIER_ROUTES: RouteInfo[] = [
  { path: '/catalog', title: 'Catalog',  icon: 'ni-box-2', class: '' },
  { path: '/quotations', title: 'Quotations',  icon: 'far fa-paper-plane', class: '' },
  { path: '/insights', title: 'Insights',  icon: 'far fa-chart-bar', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public menuSupplierItems: any[];
  public isCollapsed = true;

  loggedIn = false;
  loggedInSubsription: Subscription;
  isSupplier = false;
  constructor(private router: Router, private authService: AuthService, private dataService: DataService){
  }

  @ViewChild(LoginComponent)
    public login: LoginComponent;

  @ViewChild(RegisterComponent)
  public register: RegisterComponent;

  openLogin() {
    this.login.open();
  }

  openRegistration() {
    this.register.open();
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuSupplierItems = SUPPLIER_ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.loggedInSubsription = this.authService.user.subscribe(user => {
    this.loggedIn = !!(user && user.token) ;
    if (user) {
      this.isSupplier = this.dataService.isSupplier(user.id);
    }
  });
  }

  openProfile() {
    this.router.navigate(['/user-profile']);
  }

  ngOnDestroy() {
    if (this.loggedInSubsription) {
      this.loggedInSubsription.unsubscribe();
    }
  }

}
