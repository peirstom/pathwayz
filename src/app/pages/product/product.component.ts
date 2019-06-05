import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
      '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
  }
}
