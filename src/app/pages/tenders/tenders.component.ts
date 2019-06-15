import { Component, OnInit, ViewChild } from '@angular/core';

import { TenderFormComponent } from '../tender-form/tender-form.component';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent implements OnInit {
  @ViewChild(TenderFormComponent)
  public tenderForm: TenderFormComponent;
  constructor() { }

  ngOnInit() {
  }

  onCreateTender() {
  this.tenderForm.open();
  }
}
