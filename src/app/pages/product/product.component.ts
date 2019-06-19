import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Product, User } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public product: Product;
public supplier: User;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        const productId = params.get('id');
        this.product = this.dataService.getProduct(productId);
        this.supplier = this.dataService.getSupplierById(this.product.supplierId);
        console.log('product', this.product)
      }
    });
  }


  ngOnInit() {





    const contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
      '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
  }
}
