import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
