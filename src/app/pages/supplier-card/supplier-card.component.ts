import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { DataService, Supplier } from '../../services/data.service';
import { LottieAnimations } from '../../lottie/lottie-animations';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-supplier-card',
  templateUrl: './supplier-card.component.html',
  styleUrls: ['./supplier-card.component.scss']
})
export class SupplierCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(LoginComponent)
  public login: LoginComponent;
  @Input() supplier: Supplier;

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
    if (!this.authService.isAuthenticated) {
      this.login.open();
    } else {
      if (this.dataService.isFavorite(this.supplier.id)) {
        this.animation.setDirection(-1);
        this.animation.stop();
      } else {
        this.animation.setDirection(1);
        this.animation.setSpeed(1);
        this.animation.play();
      }
      this.dataService.updateFavorite(this.supplier.id);
    }
    // this.dataService.setFavorite('supplier', this.supplier.id);

    // let val: boolean = this.getValue();
    // this.updateRow(!val);


  }

  handleAnimation(animation) {
    this.animation = animation;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.loggedInSubsription = this.authService.user.subscribe(user => {
      if (this.dataService.isFavorite(this.supplier.id)) {
      setTimeout(() => {
        this.animation.goToAndStop(this.animation.totalFrames -1 , true);
      }, 100);
    }  else {
        this.animation.setDirection(-1);
        this.animation.stop();
      }
    });
  }
  ngOnDestroy() {
    this.loggedInSubsription.unsubscribe();
  }
}
