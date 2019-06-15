import { Injectable } from '@angular/core';
import { SearchResult } from '../pages/home/home.component';

@Injectable()
export class DataService {
  private homePage: SearchResult[] = [
    {
      title: 'Featured Products',
      type: 'products',
      children: [
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'Special Mango',
          id: '1',
          tags: ['Fruit', 'Mango'],
          image: '../../assets/img/products/mango.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '2',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: true
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '3',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '4',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
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
          id: '5',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '6',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '7',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '8',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: 'https://source.unsplash.com/600x300/?nature,water',
          fav: false
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
          id: '9',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits1.jpg',
          fav: true
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'Oranges',
          id: '10',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits2.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '11',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits3.jpg',
          fav: true
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '12',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/fruits4.jpg',
          fav: false
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
          id: '13',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier1.jpg',
          fav: true
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '14',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier2.jpg',
          fav: true
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '15',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier3.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '16',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier4.jpg',
          fav: false
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
          id: '17',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds1.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '18',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds2.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '19',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds3.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '20',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/products/seeds4.jpg',
          fav: false
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
          id: '21',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier1.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '22',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier2.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '23',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier3.jpg',
          fav: false
        },
        {
          description: 'Argon is a great free UI package based on Angular that includes the most important components and features.',
          title: 'DOWNLOAD ARGON',
          id: '24',
          tags: ['ANGULAR', 'NG-BOOTSTRAP', 'CREATIVE'],
          image: '../../assets/img/suppliers/supplier4.jpg',
          fav: false
        }
      ]
    }
  ];

  constructor() {

  }

  getDefaultHomePageData(): SearchResult[] {
    return this.homePage;
  }

  getSearchResult(searchQuery: string): SearchResult[] {
    switch (searchQuery.toLowerCase()) {
      case 'fruit':
      case 'fruits':
        return this.fruitSearchResult;
      case 'seed':
      case 'seeds':
        return this.seedSearchResult;
      default:
        return undefined;
    }
  }

  setFavorite(type, id) {
    switch (type.toLowerCase()) {
      case 'product':
        for (const product of this.homePage[0].children) {
          if (product.id === id) {
            product.fav = !product.fav;
          }
        }
        for (const product of this.fruitSearchResult[0].children) {
          if (product.id === id) {
            product.fav = !product.fav;
          }
        }
        for (const product of this.seedSearchResult[0].children) {
          if (product.id === id) {
            product.fav = !product.fav;
          }
        }
        break;
      case 'supplier':
        for (const supplier of this.homePage[1].children) {
          if (supplier.id === id) {
            supplier.fav = !supplier.fav;
          }
        }
        for (const supplier of this.fruitSearchResult[1].children) {
          if (supplier.id === id) {
            supplier.fav = !supplier.fav;
          }
        }
        for (const supplier of this.seedSearchResult[1].children) {
          if (supplier.id === id) {
            supplier.fav = !supplier.fav;
          }
        }
        break;
    }
  }

  getFavoriteProducts(): SearchResult {
    const favoriteProducts: SearchResult = {
      title: 'Favorite Products',
      type: 'products',
      children: []
    };
    for (const product of this.homePage[0].children) {
      if (product.fav) {
        favoriteProducts.children.push(product);
      }
    }
    for (const product of this.fruitSearchResult[0].children) {
      if (product.fav) {
        favoriteProducts.children.push(product);
      }
    }
    for (const product of this.seedSearchResult[0].children) {
      if (product.fav) {
        favoriteProducts.children.push(product);
      }
    }
    return favoriteProducts;
  }

  getFavoriteSuppliers(): SearchResult {
    const favoriteSuppliers: SearchResult = {
      title: 'Favorite Suppliers',
      type: 'suppliers',
      children: []
    };
    for (const supplier of this.homePage[1].children) {
      if (supplier.fav) {
        favoriteSuppliers.children.push(supplier);
      }
    }
    for (const supplier of this.fruitSearchResult[1].children) {
      if (supplier.fav) {
        favoriteSuppliers.children.push(supplier);
      }
    }
    for (const supplier of this.seedSearchResult[1].children) {
      if (supplier.fav) {
        favoriteSuppliers.children.push(supplier);
      }
    }
    return favoriteSuppliers;
  }
}
