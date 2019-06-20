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
      subProductCategory : ['Choose...']
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

  close(){
    this.modalService.dismissAll();
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
        subCategory: this.form.value.subProductCategory,

        name: this.form.value.name,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        address : this.form.value.address ,
        address2 : this.form.value.address2 ,
        city : this.form.value.city ,
        state : this.form.value.state,
        zip : this.form.value.zip ,
        productDescription: this.form.value.productDescription,
        quantity: this.form.value.quantity,
        unit:  this.form.value.unit ,
        width: this.form.value.width,
        height: this.form.value.height,
        length: this.form.value.length,
        fileName: this.form.value.fileName,
        imageName: this.form.value.imageName
      };
      this.dataService.createTender(tenderItem);
      this.submitting = false;
      this.submitted.emit();
      this.openSuccessModal();
    }, 500);


  }
}
