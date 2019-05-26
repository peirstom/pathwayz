import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() display = false;

  @Input() showSpinner = true;

  @Input() helpText: string;
  constructor() { }

  ngOnInit() {
  }

}
