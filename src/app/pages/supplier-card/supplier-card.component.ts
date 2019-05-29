import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../home/home.component';
import { DataService } from '../../services/data.service';
import { LottieAnimations } from '../../lottie/lottie-animations';

@Component({
  selector: 'app-supplier-card',
  templateUrl: './supplier-card.component.html',
  styleUrls: ['./supplier-card.component.scss']
})
export class SupplierCardComponent implements OnInit, AfterViewInit {
  @Input() supplier: Supplier;

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
    if (this.supplier.fav) {
      this.animation.setDirection(-1);
      this.animation.stop();
    } else {
      this.animation.setDirection(1);
      this.animation.setSpeed(1);
      this.animation.play();
    }
    this.dataService.setFavorite('supplier', this.supplier.id);
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

  ngAfterViewInit(): void {
    if (this.supplier.fav) {
      setTimeout(() => {
        this.animation.goToAndStop(this.animation.totalFrames -1 , true);
      }, 100);

//      this.animation.play();
    }
  }

}
