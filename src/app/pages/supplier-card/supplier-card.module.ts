import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierCardComponent } from './supplier-card.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule,
    RouterModule
  ],
  declarations: [
    SupplierCardComponent
  ],
  exports: [
    SupplierCardComponent
  ]
})
export class SupplierCardModule{ }
