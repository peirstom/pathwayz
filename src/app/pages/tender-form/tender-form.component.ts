import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { LottieAnimations } from '../../lottie/lottie-animations';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  closeResult: string;

  step = 1;
  stepWidth = '1';

  private form: FormGroup;


  private sucessAnimationConfig: object;
  private successAnimation: any;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {

    this.form = this.fb.group({
      name: null,
      lastName: null,
      email: null
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
  }

  handleAnimation(successAnimation) {
    this.successAnimation = successAnimation;
      this.successAnimation.play();
  }
}
