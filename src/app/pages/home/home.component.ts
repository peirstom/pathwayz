import { Component, OnInit } from '@angular/core';

export interface SearchResult {
  title: string;
  type: 'products' | 'suppliers';
  children?: Product[] | Supplier[];
}

export interface Product {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  id: string;
}

export interface Supplier {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  id: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;

  public search: string;
  public distance: string;

  public searching = false;

  public searchResult: SearchResult[] = [
    {
      title: 'Featured Products',
      type: 'products',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        }
      ]
    },
    {
      title: 'Featured Suppliers',
      type: 'suppliers',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSearch(search: HTMLInputElement | string, distance: HTMLSelectElement | string) {
    console.log(search, distance);
    this.searching = true;
    setTimeout(() => {
      this.searching = false;
    }, 800);
  }
}
