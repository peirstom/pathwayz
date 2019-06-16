import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../home/home.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products: SearchResult;
  suppliers: SearchResult;
  constructor(private dataService: DataService) {
    console.log('hi');
    // this.products = this.dataService.getFavoriteProducts();
    // this.suppliers = this.dataService.getFavoriteSuppliers();
  }

  ngOnInit() {
  }

}
