import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { FormService } from '../helpers/form.service';
import { RoutingService } from '../helpers/routing.service';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  isLogin = true;
  isLoading = false;
  @ViewChild('passwordEl') passwordEl: ElementRef<any>;
  @ViewChild('emailEl') emailEl: ElementRef<any>;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    this.form.get('email').statusChanges.subscribe(status => {
      this.emailControlIsValid = status === 'VALID';
    });

    this.form.get('password').statusChanges.subscribe(status => {
      this.passwordControlIsValid = status === 'VALID';
    });
  }

  constructor(
    private routingService: RoutingService,
    private authService: AuthService,
    private formService: FormService
  ) {}

  onSubmit() {
    this.formService.dismiss([
      this.emailEl.nativeElement,
      this.passwordEl.nativeElement
    ]);

    if (!this.form.valid) {
      return;
    }

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.form.reset();
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;
    this.isLoading = true;
    if (this.isLogin) {
      this.authService.login(email, password).subscribe(
        resData => {
          this.isLoading = false;
          this.routingService.replace(['/search']);
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signUp(email, password).subscribe(
        resData => {
          this.isLoading = false;

          this.routingService.replace(['/search']);
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
    }
  }

  onDone() {
    this.formService.dismiss([
      this.emailEl.nativeElement,
      this.passwordEl.nativeElement
    ]);
  }

  onSetSignIn() {
    this.isLogin = true;
  }

  onSetLogIn() {
    this.isLogin = false;
  }

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  focusPassword() {
    this.passwordEl.nativeElement.focus();
  }
}
