import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from '../../pages/login/login.module';
import { RegisterModule } from '../../pages/register/register.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    LoginModule,
    RegisterModule
    // NgbModule
  ],
  declarations: [
  ]
})
export class AuthLayoutModule { }
