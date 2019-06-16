import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { LottieAnimations } from '../../lottie/lottie-animations';
import { DataService, Product } from '../../services/data.service';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(LoginComponent)
  public login: LoginComponent;

  @Input() product: Product;

  public animationConfig: Object;
  private animation: any;
private loggedInSubsription: Subscription;


  constructor(private dataService: DataService, private authService: AuthService) {
    this.animationConfig = {
      animationData: LottieAnimations.heartIcon,
      renderer: 'svg',
      autoplay: false,
      loop: false
    };
  }

  toggle() {
    console.log('auth', this.authService.isAuthenticated)
    if (!this.authService.isAuthenticated) {
      this.login.open();
    } else {
      console.log('is favoriet?', this.dataService.isFavorite(this.product.id))
      if (this.dataService.isFavorite(this.product.id)) {
          this.animation.setDirection(-1);
          this.animation.stop();
      } else {
          this.animation.setDirection(1);
          this.animation.setSpeed(1);
          this.animation.play();
      }
      this.dataService.updateFavorite(this.product.id);
    }
  }

  handleAnimation(animation) {
    this.animation = animation;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.loggedInSubsription = this.authService.user.subscribe(user => {

      if (this.dataService.isFavorite(this.product.id)) {
        setTimeout(() => {
          this.animation.goToAndStop(this.animation.totalFrames - 1 , true);
        }, 100);
      } else {
        this.animation.setDirection(-1);
        this.animation.stop();
      }
    });

  }

  ngOnDestroy() {
    this.loggedInSubsription.unsubscribe();
  }

}
