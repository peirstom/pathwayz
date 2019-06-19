import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { QuotationFormComponent } from '../quotation-form/quotation-form.component';
import { DataService, Tender } from '../../services/data.service';

export interface TenderExtended extends Tender {
  buyerTitle: string;
  buyerImage: string;
}

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit, OnDestroy {

  @ViewChild(QuotationFormComponent)
  public quotationForm: QuotationFormComponent;

  @ViewChild(LoginComponent)
  public login: LoginComponent;
  loggedIn = false;
  loggedInSubsription: Subscription;
  private sub: any;
  private new = false;
 public tenders: TenderExtended[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService, private dataService: DataService) {
    this.sub = this.route.queryParamMap.subscribe(params => {
      if (params.has('create')) {
        console.log('YES');
        this.new = true;

      }
    });

    this.loggedInSubsription = this.authService.user.subscribe(user => {
      console.log('user', user);
      this.loggedIn = !!(user && user.token) ;
      if(this.loggedIn) {
        const tenders = this.dataService.getTendersForSupplier();
        this.tenders = tenders.map(tender => {
          const buyer = this.dataService.getSupplierById(tender.buyerId);
          return {...tender, buyerTitle: buyer.name + ' ' + buyer.lastName, buyerImage: buyer.image };
        });
      }
      this.openQuotationFormIfNew();
    });
  }

  ngOnInit() {

  }

  onCreateQuotation() {
    if(!this.loggedIn) {
      this.login.open();
      this.new = true;
    } else {
      this.quotationForm.open();
    }
  }

  openLogin() {
    this.login.open();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.loggedInSubsription.unsubscribe();
  }

  private openQuotationFormIfNew() {
    if (this.new) {
      setTimeout(() => {
        if(!this.loggedIn) {
          this.login.open();
        } else {
          this.quotationForm.open();
          this.new = false;
        }

      })

    }
  }
}
