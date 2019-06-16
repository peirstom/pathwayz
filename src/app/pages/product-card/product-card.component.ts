import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { LottieAnimations } from '../../lottie/lottie-animations';
import { DataService, Product } from '../../services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, AfterViewInit {
  @Input() product: Product;

  public animationConfig: Object;
  private animation: any;

  constructor(private dataService: DataService) {
    this.animationConfig = {
      animationData: LottieAnimations.heartIcon,
      renderer: 'svg',
      autoplay: false,
      loop: false
    };
  }

  toggle() {
    // if (this.product.fav) {
    //   this.animation.setDirection(-1);
    //   this.animation.stop();
    // } else {
    //   this.animation.setDirection(1);
    //   this.animation.setSpeed(1);
    //   this.animation.play();
    // }
    // this.dataService.setFavorite('product', this.product.id);
    // console.log('animation before loaded', this.animation);
    //
    // console.log('animation loaded', this.animation);
    //
    // // let val: boolean = this.getValue();
    // // this.updateRow(!val);


  }

  handleAnimation(animation) {
    this.animation = animation;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
//     if (this.product.fav) {
//       setTimeout(() => {
//         this.animation.goToAndStop(this.animation.totalFrames -1 , true);
//       }, 100);
//
// //      this.animation.play();
//     }
  }

}
