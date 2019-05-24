import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
