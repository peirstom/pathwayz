import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  searchResult: SearchResult[];

  products: SearchResult;
  suppliers: SearchResult;

  ngOnInit() {
    this.products = this.searchResult[0];
    this.suppliers = this.searchResult[1];
  }

}
