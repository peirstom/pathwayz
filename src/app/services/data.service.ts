import { Injectable } from '@angular/core';
import { SearchResult } from '../pages/home/home.component';
import { products } from './products';
import { users } from './users';
import { AuthService } from '../auth/auth.service';
import { Tender } from './tenders';
import { quotations } from './quotations';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

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
  isSupplier: boolean;
  title?: string;
  description?: string;
  image?: string;
  tags?: Array<string>;
  featured?: boolean;
  category?: string;
  subCategory?: string;
}

export interface Quotation {
  id: string;
  tenderId: string;
  price: number;
  supplierId: string;
  description: string;
}

export interface QuotationWithSupplier extends Quotation, Supplier{

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
  //tenders: Observable<Tender[]>; // Todo remove next line uncomment this line
  tenders: Observable<any[]>;
  private state: State = {
    products: products,
    users: users,
    tenders: null,
    quotations: quotations
  };

  constructor(private authService: AuthService, public pwDB: AngularFirestore) {
    this.tenders = this.pwDB.collection('tenders').valueChanges();
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
    const result: SearchResult[] = [
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

  getFavoriteProducts() {
    const user = this.getUser();
    if (!user) {
      return;
    }
    const prods = [];
    for (const item of user.favorites) {
      for (const product of this.state.products) {
        if (product.id === item) {
          prods.push(product);
        }
      }
    }
    return {
      title: 'Favorite Products',
      type: 'products',
      children: prods
    };
  }

  getSupplierById(id): User {

    for (const supplier of this.state.users) {
      if (supplier.id === id) {
        return supplier;
      }
    }
  }

  getFavoriteSuppliers() {
    const user = this.getUser();
    if (!user) {
      return;
    }
    const sups = [];
    for (const item of user.favorites) {
      for (const supplier of this.state.users) {
        if (supplier.id === item) {
          sups.push(supplier);
        }
      }
    }
    console.log('suppliers', user.favorites);
    return {
      title: 'Favorite Suppliers',
      type: 'suppliers',
      children: sups
    };
  }

getTenders(){
  return this.tenders;
}
//todo remove previous function replace by function below.

  // calls for buyer view
 /* getTenders(): Tender[] {
    const user = this.getUser();
    if (!user) {
      return;
    }
    const tendrs: Tender[] = [];
      for (const tender of this.state.tenders) {
        if (tender.buyerId === user.id) {
          tendrs.push(tender);
        }
    }
    return tendrs;
  }*/

  getQuotationsForTender(id): Quotation[] {
    const quot: Quotation[] = [];
    for (const item of this.state.quotations) {
      if (item.tenderId === id) {
        quot.push(item);
      }
    }
    return quot;
  }

  // calls for supplier view
  getQuotationsForTenderOfSupplier(tenderId): Quotation[] {
    const user = this.getUser();
    if (!user) {
      return;
    }
    const quot: Quotation[] = [];
    for (const item of this.state.quotations) {
      if (item.supplierId === user.id && item.tenderId === tenderId) {
        quot.push(item);
      }
    }
    return quot;
  }

  getBuyerOfTender(tenderId): User {
    const tenderArray = this.state.tenders.filter(tender => tender.id === tenderId);
    if (tenderArray.length > 0) {
      return this.getSupplierById(tenderArray[0].buyerId);
    } else {
      return undefined;
    }
  }

  getTendersForSupplier(): Tender[] {
    const user = this.getUser();
    if (!user) {
      return;
    }

    const tendersForSupplier = this.state.tenders.filter(tender => {
      if (user.category.indexOf(tender.category) !== -1) {
        return true;
      }
    });
   return tendersForSupplier;
  }


  public isFavorite(id): boolean {
    const user = this.getUser();
    if (user) {
      console.log('user', user, user.favorites.indexOf(id) !== -1);
      return user.favorites.indexOf(id) !== -1;
    } else {
      return false;
    }

  }

  public getProduct(productId) {
    const productArray = this.state.products.filter(product => {
      return product.id === productId;
    });

    if (productArray.length > 0) {
      return productArray[0];
    } else {
      return undefined;
    }
  }

  public updateFavorite(id) {
    if (this.isFavorite(id)) {
      this.removeFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }

  private addFavorite(id) {
    const user = this.getUser();
    user.favorites.push(id);
  }

  private removeFavorite(id) {
    const user = this.getUser();
    user.favorites.splice(user.favorites.indexOf(id), 1);
  }

  getUser(): User {
    const userId = this.authService.userId;
    const user = this.state.users.filter(usr => {
      return usr.id === userId;
    });

    if (user.length >= 1) {
      return user[0];
    } else {
      return undefined;
    }


  }

  isSupplier(id: string) {
    const userIsSupplier = this.state.users.filter(user => {
      return user.id === id && user.isSupplier;
    });
    return userIsSupplier.length >= 1;
  }

  getSearchResult(searchQuery: string): SearchResult[] {
    searchQuery = searchQuery.toUpperCase();

    const result: SearchResult[] = [
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
