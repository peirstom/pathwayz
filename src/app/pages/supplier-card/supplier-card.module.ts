import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierCardComponent } from './supplier-card.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule
  ],
  declarations: [
    SupplierCardComponent
  ],
  exports: [
    SupplierCardComponent
  ]
})
export class SupplierCardModule{ }
