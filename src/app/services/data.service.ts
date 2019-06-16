import { Injectable } from '@angular/core';
import { SearchResult } from '../pages/home/home.component';
import { products } from './products';
import { users } from './users';

export interface Product {
  image: string;
  title: string;
  description: string;
  id: string;
  supplierId: string;
  tags: Array<string>;
  featured: boolean;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  favorites: Array<string>; //product ids
  tendersReceived: Array<string> //tender ids
  tendersSent: Array<string> //tender ids
  quotationsReceived: Array<string> //quotation Ids
  quotationsSent: Array<string> //quotation Ids
  isSupplier: boolean;
  title?: string;
  description?: string;
  image?: string;
  tags?: Array<string>;
  featured?: boolean;
  category?: string;
  subCategory?: string;
}

export interface Tender {
  id: string;
  productName: string;
  buyerId: string;
  category: string;
  subCategory: string;
}

export interface Quotation {
  id: string;
  buyerId: string;
  supplierId: string;
  description: string;
}

export interface Supplier {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  id: string;
  fav: boolean;
}


export interface State {
  products: Product[];
  users?: User[];
  tenders?: Tender[];
  quotations?: Quotation[];
}

@Injectable()
export class DataService {

  private state: State = {
    products: products,
    users: users
  }

  getFeaturedProducts() {
    return this.state.products.filter(product => {
      return product.featured;
    });
  }

  getFeaturedSuppliers() {
    return this.state.users.filter(user => {
      return user.featured && user.isSupplier;
    });
  }

  getSearchResultProducts(query) {
    return this.state.products.filter(product => {
      return product.tags.toString().toUpperCase().indexOf(query) > -1;
    });
  }

  getSearchResultSuppliers(query) {
    return this.state.users.filter(user => {
      return user.isSupplier && (user.tags.toString().toUpperCase().indexOf(query) > -1);
    });
  }

  getFeatured() {
    const result: SearchResult[] =  [
      {
        title: 'Featured Products',
        type: 'products',
        children: this.getFeaturedProducts()
      },
      {
        title: 'Featured Suppliers',
        type: 'suppliers',
        children: this.getFeaturedSuppliers()
      }
    ];
    return result;
  }

  isSupplier(id: string) {
    const userIsSupplier = this.state.users.filter(user => {
      return user.id === id && user.isSupplier;
    });
    return userIsSupplier.length >= 1;
  }

  constructor() {

  }

  getSearchResult(searchQuery: string): SearchResult[] {
    searchQuery = searchQuery.toUpperCase();

    const result: SearchResult[] =  [
      {
        title: 'Products',
        type: 'products',
        children: this.getSearchResultProducts(searchQuery)
      },
      {
        title: 'Suppliers',
        type: 'suppliers',
        children: this.getSearchResultSuppliers(searchQuery)
      }
    ];

    if (result[0].children.length === 0) {
      return undefined;
    }
    return result;
  }

  // setFavorite(type, id) {
  //   switch (type.toLowerCase()) {
  //     case 'product':
  //       for (const product of this.homePage[0].children) {
  //         if (product.id === id) {
  //           product.fav = !product.fav;
  //         }
  //       }
  //       for (const product of this.herbSearchResult[0].children) {
  //         if (product.id === id) {
  //           product.fav = !product.fav;
  //         }
  //       }
  //       for (const product of this.pepperSearchResult[0].children) {
  //         if (product.id === id) {
  //           product.fav = !product.fav;
  //         }
  //       }
  //       break;
  //     case 'supplier':
  //       for (const supplier of this.homePage[1].children) {
  //         if (supplier.id === id) {
  //           supplier.fav = !supplier.fav;
  //         }
  //       }
  //       for (const supplier of this.herbSearchResult[1].children) {
  //         if (supplier.id === id) {
  //           supplier.fav = !supplier.fav;
  //         }
  //       }
  //       for (const supplier of this.pepperSearchResult[1].children) {
  //         if (supplier.id === id) {
  //           supplier.fav = !supplier.fav;
  //         }
  //       }
  //       break;
  //   }
  // }
  //
  // getFavoriteProducts(): SearchResult {
  //   const favoriteProducts: SearchResult = {
  //     title: 'Favorite Products',
  //     type: 'products',
  //     children: []
  //   };
  //   for (const product of this.homePage[0].children) {
  //     if (product.fav) {
  //       favoriteProducts.children.push(product);
  //     }
  //   }
  //   for (const product of this.herbSearchResult[0].children) {
  //     if (product.fav) {
  //       favoriteProducts.children.push(product);
  //     }
  //   }
  //   for (const product of this.pepperSearchResult[0].children) {
  //     if (product.fav) {
  //       favoriteProducts.children.push(product);
  //     }
  //   }
  //   return favoriteProducts;
  // }
  //
  // getFavoriteSuppliers(): SearchResult {
  //   const favoriteSuppliers: SearchResult = {
  //     title: 'Favorite Suppliers',
  //     type: 'suppliers',
  //     children: []
  //   };
  //   for (const supplier of this.homePage[1].children) {
  //     if (supplier.fav) {
  //       favoriteSuppliers.children.push(supplier);
  //     }
  //   }
  //   for (const supplier of this.herbSearchResult[1].children) {
  //     if (supplier.fav) {
  //       favoriteSuppliers.children.push(supplier);
  //     }
  //   }
  //   for (const supplier of this.pepperSearchResult[1].children) {
  //     if (supplier.fav) {
  //       favoriteSuppliers.children.push(supplier);
  //     }
  //   }
  //   return favoriteSuppliers;
  // }
}
