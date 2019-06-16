import { Product } from './data.service';

export const products: Product[] = [
  {
    id: '1',
    title: 'Mint',
    description: 'Refreshing tasting herb, good for teas and cooking.',
    image: '',
    tags: ['herbs', 'mint', 'restaurant', 'fresh'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '2',
    title: 'Thyme',
    description: 'Aromatic herbs used in italian cooking.',
    image: '',
    tags: ['herbs', 'italian', 'thyme' , 'restaurant'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '5',
    title: 'Basil',
    description: 'Herb used in italian cooking.',
    image: '',
    tags: ['herbs', 'restaurant', 'italian', 'basil'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '6',
    title: 'Parsley',
    description: 'Mediterranean herb used in cooking.',
    image: '',
    tags: ['herbs', 'parsley', 'restaurant', 'meditarian'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '3',
    title: 'Bell pepper',
    description: 'A not hot but sweet flavoured pepper.',
    image: '',
    tags: ['pepper', 'sweet', 'red', 'yellow'],
    featured: true,
    supplierId: '1'
  },
  {
    id: '4',
    title: 'Scorpion pepper',
    description: 'World\'s hottest naturally grown pepper.',
    image: '',
    tags: ['pepper', 'extreme', 'hot'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '7',
    title: 'Jalapeno pepper',
    description: 'Medium-sized chili pepper.',
    image: '',
    tags: ['pepper', 'medium', 'hot'],
    featured: false,
    supplierId: '1'
  },
  {
    id: '8',
    title: 'Habanero pepper',
    description: 'A hot variety of chili pepper.',
    image: '',
    tags: ['pepper', 'very', 'hot'],
    featured: false,
    supplierId: '1'
  }
];
