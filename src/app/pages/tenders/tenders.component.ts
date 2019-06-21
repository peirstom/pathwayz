import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TenderFormComponent } from '../tender-form/tender-form.component';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { DataService, Quotation, Tender } from '../../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  @ViewChild('tenderSummary')
  public tenderSummary: TemplateRef<any>;

  loggedIn = false;
  loggedInSubsription: Subscription;
  private sub: any;
  private new = false;
  public selectedTenderId: string;
  public selectedQuotationId: string;
  selectedTenderProductName: string;
  public tenders: Tender[];
  closeResult: string;

  public form: FormGroup;


  public quotations: QuotationExtended[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService, private dataService: DataService, private modalService: NgbModal, private fb: FormBuilder) {

    this.form = this.fb.group({
      name: null,
      lastName: null,
      email: null,
      address: null,
      address2: null,
      city: null,
      state: ['Choose...'],
      zip: null,
      productName: null,
      inputPrice: null,
      productDescription: null,
      quantity: null,
      unit: ['KG'],
      dueDate: null,
      width: null,
      height: null,
      length: null,
      fileName: null,
      imageName: null,
      productCategory: ['Choose...'],
      subProductCategory: ['Choose...']
    });


    this.sub = this.route.queryParamMap.subscribe(params => {
      if (params.has('create')) {
        console.log('YES');
        this.new = true;

      }
    });

    this.loggedInSubsription = this.authService.user.subscribe(user => {
      console.log('user', user);
      this.loggedIn = !!(user && user.token);
      if (this.loggedIn) {
        this.tenders = this.dataService.getTenders();
      }
      this.openTenderFormIfNew();
    });


    console.log('tenders', this.tenders);
  }

  ngOnInit() {
  }

  onCreateTender() {
    if (!this.loggedIn) {
      this.login.open();
      this.new = true;
    } else {
      this.tenderForm.open();
    }
  }

  openTenderSummary() {
    const content = this.tenderSummary;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {
      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
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
        if (!this.loggedIn) {
          this.login.open();
        } else {
          this.tenderForm.open();
          this.new = false;
        }

      });

    }
  }

  onSelectTender(item: Tender) {
    this.selectedTenderId = item.id;
    this.selectedTenderProductName = item.productName;
    this.selectedQuotationId = undefined;

    const quotations = this.dataService.getQuotationsForTender(item.id);

    this.quotations = quotations.map(quotation => {
      const supplier = this.dataService.getSupplierById(quotation.supplierId);
      return { ...quotation, supplierTitle: supplier.title, supplierImage: supplier.image };
    });
    console.log('quotations', this.quotations);
  }

  onSelectQuotation(item: Quotation) {
    console.log('you clicked on:' + JSON.stringify(item));
    this.selectedQuotationId = item.id;
  }

  onSubmitTenderform() {
    this.tenders = this.dataService.getTenders();
  }

  onClickDetailsTender(tender: Tender) {
    this.form.patchValue({
      name: tender.name,
      lastName: tender.lastName,
      email: tender.email,
      address : tender.address,
      address2 : tender.address2,
      city : tender.city,
      state : tender.state,
      zip : tender.zip,
      productName: tender.productName,
      inputPrice: tender.price,
      productDescription: tender.productDescription,
      quantity: tender.quantity,
      unit: tender.unit,
      dueDate: tender.dueDate,
      width: tender.width,
      height: tender.height,
      length: tender.length,
      fileName: tender.fileName,
      imageName: tender.imageName,
      productCategory: tender.category,
      subProductCategory : tender.subCategory
    });
    this.openTenderSummary();
  }
}
