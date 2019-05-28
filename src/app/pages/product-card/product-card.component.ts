import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../home/home.component';
import { LottieAnimations } from '../../lottie/lottie-animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  public animationConfig: Object;
  private animation: any;
 public favorite = false;

  constructor() {
    this.animationConfig = {
      animationData: LottieAnimations.heartIcon,
      renderer: 'svg',
      autoplay: false,
      loop: false
    };
  }

  toggle() {
    if (this.favorite) {
      this.animation.setDirection(-1);
      this.animation.stop();
    } else {
      this.animation.setDirection(1);
      this.animation.setSpeed(1);
      this.animation.play();
    }
    this.favorite = !this.favorite;
    console.log('animation before loaded', this.animation);

    console.log('animation loaded', this.animation);

    // let val: boolean = this.getValue();
    // this.updateRow(!val);


  }

  handleAnimation(animation) {
    this.animation = animation;
  }

  ngOnInit() {
  }

}
