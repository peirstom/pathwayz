import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { QuotationFormComponent } from '../quotation-form/quotation-form.component';
import { DataService, Quotation, Tender } from '../../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface TenderExtended extends Tender {
  buyerTitle: string;
  buyerImage: string;
}

export interface QuotationsSupplier extends Quotation {
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
  @ViewChild('tenderSummary')
  public tenderSummary: TemplateRef<any>;
  loggedIn = false;
  loggedInSubsription: Subscription;
  private sub: any;
  private new = false;
  public selectedTenderId: string;
  selectedTenderProductName: string;
  closeResult;
 public tenders: TenderExtended[] = [];
 public quotations: QuotationsSupplier[]  = [];
  public form: FormGroup;
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

  onSelectTender(item: Tender) {
    this.selectedTenderId = item.id;
    this.selectedTenderProductName = item.productName;

    const quotations = this.dataService.getQuotationsForTenderOfSupplier(item.id);
    console.log('quotations', quotations)

    this.quotations = quotations.map(quotation => {
      const buyer = this.dataService.getBuyerOfTender(quotation.tenderId);
      return {...quotation, buyerTitle: buyer.name + ' ' + buyer.lastName, buyerImage: buyer.image}
    })

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
  private openQuotationFormIfNew() {
    if (this.new) {
      setTimeout(() => {
        if(!this.loggedIn) {
          this.login.open();
        } else {
          this.quotationForm.open();
          this.new = false;
        }
      });

    }
  }
}
