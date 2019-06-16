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

  isSupplier(id: string) {
    const userIsSupplier = this.state.users.filter(user => {
      return user.id === id && user.isSupplier;
    });
    console.log('isspullier', userIsSupplier.length >= 1)
    return userIsSupplier.length >= 1;
  }

  // private homePage: SearchResult[] = [
  //   {
  //     title: 'Featured Products',
  //     type: 'products',
  //     children: [
  //       {
  //         description: 'refreshing tasting herb, good for teas and cooking.',
  //         title: 'mint',
  //         id: '1',
  //         tags: ['herbs', 'mint', 'restaurant', 'fresh'],
  //         image: '../../assets/img/products/fruits1.jpg',
  //         fav: true
  //       },
  //       {
  //         description: 'aromatic herbs used in italian cooking.',
  //         title: 'thyme',
  //         id: '2',
  //         tags: ['herbs', 'italian', 'thyme' , 'restaurant'],
  //         image: '../../assets/img/products/fruits4.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'A not hot but sweet flavoured pepper.',
  //         title: 'bell pepper',
  //         id: '3',
  //         tags: ['pepper', 'sweet', 'red', 'yellow'],
  //         image: '../../assets/img/products/seeds4.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'world\'s hottest naturally gorwn pepper.',
  //         title: 'scorpion pepper',
  //         id: '4',
  //         tags: ['pepper', 'extreme', 'hot'],
  //         image: '../../assets/img/products/seeds3.jpg',
  //         fav: false
  //       },
  //     ]
  //   },
  //   {
  //     title: 'Featured Suppliers',
  //     type: 'suppliers',
  //     children: [
  //       {
  //         description: 'Farm located in the East of Trinidad, in teh Malabar area..',
  //         title: 'Picker Farm',
  //         id: '5',
  //         tags: ['peppers', 'herbs'],
  //         image: '../../assets/img/suppliers/supplier1.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Supplier of produce and canned goods in the Diego Martin area..',
  //         title: 'fresh foods',
  //         id: '6',
  //         tags: ['fresh', 'peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier2.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Aquaculture farm suppling high quality hearbs and spice for restaurants.',
  //         title: 'Trini produce',
  //         id: '7',
  //         tags: ['peppers', 'herbs', 'mediterranean'],
  //         image: '../../assets/img/suppliers/supplier3.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Small vegetable and fruit grower in Couva.',
  //         title: 'the right foods',
  //         id: '8',
  //         tags: ['peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier4.jpg',
  //         fav: false
  //       }
  //     ]
  //   }
  // ];
  // private herbSearchResult: SearchResult[] = [
  //   {
  //     title: 'Products',
  //     type: 'products',
  //     children: [
  //       {
  //         description: 'refreshing tasting herb, good for teas and cooking.',
  //         title: 'mint',
  //         id: '9',
  //         tags: ['herbs', 'mint', 'restaurant', 'fresh'],
  //         image: '../../assets/img/products/fruits1.jpg',
  //         fav: true
  //       },
  //       {
  //         description: 'herb used in italian cooking.',
  //         title: 'basil',
  //         id: '10',
  //         tags: ['herbs', 'restaurant', 'italian', 'basil'],
  //         image: '../../assets/img/products/fruits2.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Mediterranean herb used in cooking.',
  //         title: 'parsley',
  //         id: '11',
  //         tags: ['herbs', 'parsley', 'restaurant', 'meditarian'],
  //         image: '../../assets/img/products/fruits3.jpg',
  //         fav: true
  //       },
  //       {
  //         description: 'aromatic herbs used in italian cooking.',
  //         title: 'thyme',
  //         id: '12',
  //         tags: ['herbs', 'italian', 'thyme' , 'restaurant'],
  //         image: '../../assets/img/products/fruits4.jpg',
  //         fav: false
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Suppliers',
  //     type: 'suppliers',
  //     children: [
  //       {
  //         description: 'Farm located in the East of Trinidad, in teh Malabar area..',
  //         title: 'Picker Farm',
  //         id: '13',
  //         tags: ['peppers', 'herbs'],
  //         image: '../../assets/img/suppliers/supplier1.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Supplier of produce and canned goods in the Diego Martin area..',
  //         title: 'fresh foods',
  //         id: '14',
  //         tags: ['fresh', 'peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier2.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Aquaculture farm suppling high quality hearbs and spice for restaurants.',
  //         title: 'Trini produce',
  //         id: '15',
  //         tags: ['peppers', 'herbs', 'mediterranean'],
  //         image: '../../assets/img/suppliers/supplier3.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Small vegetable and fruit grower in Couva.',
  //         title: 'the right foods',
  //         id: '16',
  //         tags: ['peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier4.jpg',
  //         fav: false
  //       }
  //     ]
  //   }
  // ];
  // private pepperSearchResult: SearchResult[] = [
  //   {
  //     title: 'Featured Products',
  //     type: 'products',
  //     children: [
  //       {
  //         description: 'medium-sized chili pepper.',
  //         title: 'jalapeno pepper',
  //         id: '17',
  //         tags: ['pepper', 'medium', 'hot'],
  //         image: '../../assets/img/products/seeds1.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'a hot variety of chili pepper.',
  //         title: 'habanero pepper',
  //         id: '18',
  //         tags: ['pepper', 'very', 'hot'],
  //         image: '../../assets/img/products/seeds2.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'world\'s hottest naturally gorwn pepper.',
  //         title: 'scorpion pepper',
  //         id: '19',
  //         tags: ['pepper', 'extreme', 'hot'],
  //         image: '../../assets/img/products/seeds3.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'A not hot but sweet flavoured pepper.',
  //         title: 'bell pepper',
  //         id: '20',
  //         tags: ['pepper', 'sweet', 'red', 'yellow'],
  //         image: '../../assets/img/products/seeds4.jpg',
  //         fav: false
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Featured Suppliers',
  //     type: 'suppliers',
  //     children: [
  //       {
  //         description: 'Farm located in the East of Trinidad, in teh Malabar area..',
  //         title: 'Picker Farm',
  //         id: '21',
  //         tags: ['peppers', 'herbs'],
  //         image: '../../assets/img/suppliers/supplier1.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Supplier of produce and canned goods in the Diego Martin area..',
  //         title: 'fresh foods',
  //         id: '22',
  //         tags: ['fresh', 'peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier2.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Aquaculture farm suppling high quality hearbs and spice for restaurants.',
  //         title: 'Trini produce',
  //         id: '23',
  //         tags: ['peppers', 'herbs', 'mediterranean'],
  //         image: '../../assets/img/suppliers/supplier3.jpg',
  //         fav: false
  //       },
  //       {
  //         description: 'Small vegetable and fruit grower in Couva.',
  //         title: 'the right foods',
  //         id: '24',
  //         tags: ['peppers', 'herbs', 'italian'],
  //         image: '../../assets/img/suppliers/supplier4.jpg',
  //         fav: false
  //       }
  //     ]
  //   }
  // ];

  constructor() {

  }

  // getDefaultHomePageData(): SearchResult[] {
  //   // return this.homePage;
  // }

  getSearchResult(searchQuery: string): SearchResult[] {
    switch (searchQuery.toLowerCase()) {
      case 'herb':
      case 'herbs':
      case 'restaurant':
      case 'mint':
      case 'basil':
      case 'parsley':
      case 'thyme':
        // return this.herbSearchResult;
      case 'pepper':
      case 'peppers':
      case 'jalapeno':
      case 'bell pepper':
      case 'scorpion pepper':
        // return this.pepperSearchResult;
      default:
        return undefined;
    }
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
