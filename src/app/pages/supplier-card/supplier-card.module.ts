import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierCardComponent } from './supplier-card.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule,
    RouterModule,
    LoginModule
  ],
  declarations: [
    SupplierCardComponent
  ],
  exports: [
    SupplierCardComponent
  ]
})
export class SupplierCardModule{ }
