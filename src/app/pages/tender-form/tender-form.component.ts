import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tender-form',
  templateUrl: './tender-form.component.html',
  styleUrls: ['./tender-form.component.scss']
})
export class TenderFormComponent implements OnInit {
  @ViewChild('tenderForm')
  public content: TemplateRef<any>;
  closeResult: string;

  step = 1;
  stepWidth = '30';

  constructor(private modalService: NgbModal) { }
  open() {
    const content = this.content;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {
      this.resetForm();
      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
  }
  ngOnInit() {
  }

  setStep(step) {
    switch(step) {
      case 1:
        this.stepWidth = '30';
        break;
      case 2:
        this.stepWidth = '60';
        break;
      case 3:
        this.stepWidth = '80';
        break;
    }
    this.step = step;
  }

  resetForm() {
    this.step = 1;
    this.stepWidth = '30';
  }
}
