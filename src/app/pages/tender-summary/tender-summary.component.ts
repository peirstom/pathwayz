import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender-summary',
  templateUrl: './tender-summary.component.html',
  styleUrls: ['./tender-summary.component.scss']
})
export class TenderSummaryComponent implements OnInit {

  @Input()
  form;

  constructor() { }

  ngOnInit() {
  }

}
