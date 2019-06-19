import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { LottieAnimations } from '../../lottie/lottie-animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService, Tender } from '../../services/data.service';

@Component({
  selector: 'app-tender-form',
  templateUrl: './tender-form.component.html',
  styleUrls: ['./tender-form.component.scss']
})
export class TenderFormComponent implements OnInit {
  @ViewChild('tenderForm')
  public content: TemplateRef<any>;

  @ViewChild('successTemplate')
  public successTemplate: TemplateRef<any>;

  @Output() submitted = new EventEmitter<any>()

  closeResult: string;

  step = 1;
  stepWidth = '1';

  public form: FormGroup;


  public sucessAnimationConfig: object;
  private successAnimation: any;
  private submitting: boolean;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private dataService: DataService) {

    this.form = this.fb.group({
      name: null,
      lastName: null,
      email: null,
      address : null,
      address2 : null,
      city : null,
      state : ['Choose...'],
      zip : null,
      productName: null,
      price: null,
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
      subproductCategory : ['Choose...']
    });



    this.sucessAnimationConfig = {
      animationData: LottieAnimations.completeIcon,
      renderer: 'svg',
      autoplay: false,
      loop: false,
    };
   }
  open() {
    const content = this.content;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {
      this.resetForm();
      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
  }

  openSuccessModal() {
    this.modalService.dismissAll();
    const content = this.successTemplate;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {

      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });

    setTimeout(() => {
      this.modalService.dismissAll();
    }, 650);
  }
  ngOnInit() {
  }

  setStep(step) {
    switch(step) {
      case 1:
        this.stepWidth = '1';
        break;
      case 2:
        this.stepWidth = '2';
        break;
      case 3:
        this.stepWidth = '3';
        break;
    }
    this.step = step;
  }

  resetForm() {
    this.step = 1;
    this.stepWidth = '1';
    this.form.reset();
  }

  handleAnimation(successAnimation) {
    this.successAnimation = successAnimation;
      this.successAnimation.play();
  }

  onSubmit() {
    this.submitting = true;

    console.log('form values', this.form);


    setTimeout(() => {
      const tenderItem: Tender = {
        id: Date.now().toString(),
        buyerId: this.dataService.getUser().id,
        productName: this.form.value.productName,
        dueDate: this.form.value.dueDate,
        price: this.form.value.price,
        category: this.form.value.productCategory,
        status: 'posted',
        subCategory: this.form.value.subproductCategory
      }
      this.dataService.createTender(tenderItem);
      this.submitting = false;
      this.submitted.emit();
      this.openSuccessModal();
    }, 500);


  }
}
