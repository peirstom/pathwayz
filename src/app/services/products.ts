import { Product } from './data.service';
export const products: Product[] = [
  {
    id: '1',
    title: 'Mint',
    description: 'Refreshing tasting herb, good for teas and cooking.',
    image: '../../assets/img/products/mint.jpg',
    tags: ['herbs', 'mint', 'restaurant', 'fresh'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '2',
    title: 'Thyme',
    description: 'Aromatic herbs used in italian cooking.',
    image: '../../assets/img/products/thyme.jpg',
    tags: ['herbs', 'italian', 'thyme' , 'restaurant'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '5',
    title: 'Basil',
    description: 'Herb used in italian cooking.',
    image: '../../assets/img/products/basil.jpg',
    tags: ['herbs', 'restaurant', 'italian', 'basil'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '6',
    title: 'Parsley',
    description: 'Mediterranean herb used in cooking.',
    image: '../../assets/img/products/parsley.jpg',
    tags: ['herbs', 'parsley', 'restaurant', 'meditarian'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '3',
    title: 'Bell pepper',
    description: 'A not hot but sweet flavoured pepper.',
    image: '../../assets/img/products/bellpepper.jpg',
    tags: ['pepper', 'sweet', 'red', 'yellow'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '4',
    title: 'Scorpion pepper',
    description: 'World\'s hottest naturally grown pepper.',
    image: '../../assets/img/products/scorpion.jpg',
    tags: ['pepper', 'extreme', 'hot'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '7',
    title: 'Jalapeno pepper',
    description: 'Medium-sized chili pepper.',
    image: '../../assets/img/products/jalapeno.jpg',
    tags: ['pepper', 'medium', 'hot'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '8',
    title: 'Habanero pepper',
    description: 'A hot variety of chili pepper.',
    image: '../../assets/img/products/habanero.jpg',
    tags: ['pepper', 'very', 'hot'],
    featured: false,
    supplierId: '1'
  }
];
