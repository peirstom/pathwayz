import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SearchResult } from '../home/home.component';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  @ViewChild(LoginComponent)
  public login: LoginComponent;
  products;
  suppliers;

public isLoggedIn = false;
  private loggedInSubsription: Subscription;

  constructor(private dataService: DataService, private authService: AuthService) {

    this.products = this.dataService.getFavoriteProducts();
    this.suppliers = this.dataService.getFavoriteSuppliers();

  }

  ngOnInit() {
    this.loggedInSubsription = this.authService.user.subscribe(user => {
      console.log('login', this.authService.isAuthenticated)
      this.isLoggedIn = !!(user && user.token) ;
      if(this.isLoggedIn) {
        this.products = this.dataService.getFavoriteProducts();
        this.suppliers = this.dataService.getFavoriteSuppliers();
      }
    });
  }
  ngOnDestroy() {
    this.loggedInSubsription.unsubscribe();
  }

  openLogin() {
    this.login.open();
  }
}
