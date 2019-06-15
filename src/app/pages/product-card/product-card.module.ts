import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule,
    RouterModule
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule{ }
