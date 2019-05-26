import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  set searchResult(searchResult: SearchResult[]) {
    console.log('search result', searchResult);
    this._searchResult = searchResult;
    this.products = this.searchResult[0];
    this.suppliers = this.searchResult[1];
  }
  get searchResult(): SearchResult[] {
    return this._searchResult;
}
  private _searchResult: SearchResult[];

  products: SearchResult;
  suppliers: SearchResult

  ngOnInit() {

  }

}
