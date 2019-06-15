import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { TenderFormComponent } from '../tender-form/tender-form.component';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent implements OnInit, OnDestroy {

  @ViewChild(TenderFormComponent)
  public tenderForm: TenderFormComponent;

  @ViewChild(LoginComponent)
  public login: LoginComponent;
  loggedIn = false;
  loggedInSubsription: Subscription;
  private sub: any;
  private new = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.sub = this.route.queryParamMap.subscribe(params => {
      if (params.has('create')) {
        console.log('YES')
        this.new = true;

      }
    });

    this.loggedInSubsription = this.authService.user.subscribe(user => {
      console.log('user', user);
      this.loggedIn = !!(user && user.token) ;
      this.openTenderFormIfNew();
    });
  }

  ngOnInit() {

  }

  onCreateTender() {
    if(!this.loggedIn) {
      this.login.open();
      this.new = true;
    } else {
      this.tenderForm.open();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.loggedInSubsription.unsubscribe();
  }

  private openTenderFormIfNew() {
    if (this.new) {
      setTimeout(() => {
        if(!this.loggedIn) {
          this.login.open();
        } else {
          this.tenderForm.open();
          this.new = false;
        }

      })

    }
  }
}
