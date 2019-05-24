import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class ComponentsModule { }
