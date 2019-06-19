import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { TenderFormComponent } from '../tender-form/tender-form.component';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { DataService, Quotation, Tender } from '../../services/data.service';

export interface QuotationExtended extends Quotation {
  supplierTitle: string;
  supplierImage: string;
}


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
  public selectedTenderId: string;
  public selectedQuotationId: string;
  selectedTenderProductName: string;
  public tenders: Tender[];


  public quotations: QuotationExtended[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService, private dataService: DataService) {
    this.sub = this.route.queryParamMap.subscribe(params => {
      if (params.has('create')) {
        console.log('YES')
        this.new = true;

      }
    });

    this.loggedInSubsription = this.authService.user.subscribe(user => {
      console.log('user', user);
      this.loggedIn = !!(user && user.token) ;
      if(this.loggedIn) {
        this.tenders = this.dataService.getTenders();
      }
      this.openTenderFormIfNew();
    });


    console.log('tenders', this.tenders);
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

  openLogin() {
    this.login.open();
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

  onSelectTender(item: Tender) {
    this.selectedTenderId = item.id;
    this.selectedTenderProductName = item.productName;

    const quotations = this.dataService.getQuotationsForTender(item.id);

    this.quotations = quotations.map(quotation => {
      const supplier = this.dataService.getSupplierById(quotation.supplierId)
      return {...quotation, supplierTitle: supplier.title, supplierImage: supplier.image };
    });
    console.log('quotations', this.quotations);
  }

  onSelectQuotation(item: Quotation) {
    console.log("you clicked on:" + JSON.stringify(item));
    this.selectedQuotationId = item.id;
  }
}
