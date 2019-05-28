import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule{ }
