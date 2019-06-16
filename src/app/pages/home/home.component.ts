import { Component, OnInit } from '@angular/core';
import { DataService, Product, Supplier, User } from '../../services/data.service';

export interface SearchResult {
  title: string;
  type: 'products' | 'suppliers';
  children?: Product[] | User[];
}




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public search: string;
  public distance: string;

  public searching = false;

  public searchResult: SearchResult[];
  constructor(private dataService: DataService) {
    //this.searchResult = this.dataService.getDefaultHomePageData();



    this.searchResult = this.dataService.getFeatured();
  }

  ngOnInit() {}

  onSearch(search: string, distance: string) {
    console.log(search, distance);
    if (!search) {
      return;
    }
    this.searching = true;
    setTimeout(() => {
      this.searchResult = this.dataService.getSearchResult(search);
      this.searching = false;
    }, 400);


  }
}
