import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
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

  constructor(private modalService: NgbModal) { }
  open() {
    const content = this.content;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {
      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
  }
  ngOnInit() {

  }
}
