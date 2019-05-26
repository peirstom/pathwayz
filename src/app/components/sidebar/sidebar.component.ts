import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/tenders', title: 'Tenders',  icon: 'ni-send text-green', class: '' },
    { path: '/messages', title: 'Messages',  icon: 'ni-email-83 text-warning', class: '' },
    { path: '/favorites', title: 'Favorites',  icon: 'ni-favourite-28 text-red', class: '' },
    { path: '/history', title: 'History',  icon: 'ni-archive-2 text-dark', class: '' },
    { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },

    // TODO: The paths below are not needed but kept as reference for now.
  //  { path: '/', title: '',  icon: '', class: '' },
  //  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  //  { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  //  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
 //   { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' }

];

export const SUPPLIER_ROUTES: RouteInfo[] = [
  { path: '/catalog', title: 'Catalog',  icon: 'ni-box-2 text-primary', class: '' },
  { path: '/quotations', title: 'Quotations',  icon: 'ni-send text-green', class: '' },
  { path: '/insights', title: 'Insights',  icon: 'ni-chart-bar-32 text-warning', class: '' }
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

  constructor(private router: Router) { }

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
  }
}
