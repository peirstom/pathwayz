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

  private homePage: SearchResult[] = [
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
  private fruitSearchResult: SearchResult[] = [
    {
      title: 'Products',
      type: 'products',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'Apples',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits1.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'Oranges',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits2.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits3.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits4.jpg'
        }
      ]
    },
    {
      title: 'Suppliers',
      type: 'suppliers',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier1.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier2.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier3.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier4.jpg'
        }
      ]
    }
  ];
  private seedSearchResult: SearchResult[] = [
    {
      title: 'Featured Products',
      type: 'products',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds1.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds2.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds3.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds4.jpg'
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
          image: '../../assets/img/suppliers/supplier1.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier2.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier3.jpg'
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '1',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier4.jpg'
        }
      ]
    }
  ];
  public searchResult: SearchResult[] = this.homePage;

  constructor() {
  }

  ngOnInit() {
  }

  onSearch(search: string, distance: string) {
    console.log(search, distance);
    if (!search) {
      return;
    }
    this.searching = true;
    setTimeout(() => {
      switch (search.toLowerCase()) {
        case 'fruit':
        case 'fruits':
          this.searchResult = [...this.fruitSearchResult];
          break;
        case 'seed':
        case 'seeds':
          this.searchResult = [...this.seedSearchResult];
          break;
        default:
          this.searchResult = undefined;
      }
      this.searching = false;
    }, 400);


  }
}
