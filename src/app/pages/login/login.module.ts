import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login.component';
import { SpinnerModule } from '../../components/shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SpinnerModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
