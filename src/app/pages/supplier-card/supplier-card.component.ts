import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../home/home.component';

@Component({
  selector: 'app-supplier-card',
  templateUrl: './supplier-card.component.html',
  styleUrls: ['./supplier-card.component.scss']
})
export class SupplierCardComponent implements OnInit {
  @Input() supplier: Supplier;
  constructor() { }

  ngOnInit() {
  }

}
