import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierCardComponent } from './supplier-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SupplierCardComponent
  ],
  exports: [
    SupplierCardComponent
  ]
})
export class SupplierCardModule{ }
