import { Product } from './data.service';
export const products: Product[] = [
  {
    id: '1',
    title: 'Mint',
    description: 'Mint makes a great garnish for summertime drinks, fruit platters and frozen desserts.' +
    ' It\'s excellent when paired with lamb and is found in many Middle Eastern, Thai and Vietnamese dishes. ',
    image: '../../assets/img/products/mint.jpg',
    tags: ['herbs', 'mint', 'restaurant', 'fresh'],
    featured: true,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '2',
    title: 'Thyme',
    description: 'Thyme has a clove-like taste that enhances Creole and Cajun dishes.' +
    ' It can also be used to season meat and in poultry stuffing. Its strong flavor requires sparing use.',
    image: '../../assets/img/products/thyme.jpg',
    tags: ['herbs', 'italian', 'thyme' , 'restaurant'],
    featured: true,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '5',
    title: 'Basil',
    description: 'Basil works well with tomatoes, squash, cabbage, beans, pasta, poultry, pesto or spaghetti sauce, pizza or seafood.' +
    ' Handle it with care as its leaves are delicate. Basil blends well with garlic, lemon, fennel, marjoram, oregano, thyme and curry.',
    image: '../../assets/img/products/basil.jpg',
    tags: ['herbs', 'restaurant', 'italian', 'basil'],
    featured: false,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '6',
    title: 'Parsley',
    description: 'Italian parsley differs from its curly cousin in that its leaves are flat, toothed and grouped in clusters' +
    ' of three on slender branches attached to a central stem or stalk (it is also known as flat-leaf parsley).',
    image: '../../assets/img/products/parsley.jpg',
    tags: ['herbs', 'parsley', 'restaurant', 'meditarian'],
    featured: false,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '3',
    title: 'Bell pepper',
    description: 'Bell peppers, whether they be green, red or yellow, are a staple in many homes.' +
    ' Encourage the purchase of organic bell peppers in your department to boost the bottom line as their sales are growing',
    image: '../../assets/img/products/bellpepper.jpg',
    tags: ['pepper', 'sweet', 'red', 'yellow', 'green', 'bell'],
    featured: true,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '4',
    title: 'Anaheim pepper',
    description: 'Anaheim peppers are best known for being the type of peppers used in canned green chilis. They are ' +
    ' long and narrow and come in either red or green varieties. Green anaheims are a mild, sweet pepper, and are available year-round.',
    image: '../../assets/img/products/scorpion.jpg',
    tags: ['Anaheim', 'pepper', 'chili', 'mild', 'sweet'],
    featured: false,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '7',
    title: 'Jalapeno pepper',
    description: 'Jalapenos vary from dark green to red when fully mature with smooth, shiny skin.' +
    ' They have a vegetal flavor with a mild to medium spice level ranging from 2,000 to 10,000 Scoville units.',
    image: '../../assets/img/products/jalapeno.jpg',
    tags: ['pepper', 'medium', 'hot', 'jalapeno'],
    featured: true,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  },
  {
    id: '8',
    title: 'Habanero pepper',
    description: 'Habanero peppers are small, lantern-shaped, shiny and most commonly orange in color.' +
    ' They\'ve very hot, at about 200,000 to 300,000 Scoville units, with a somewhat fruity flavor and fragrance.',
    image: '../../assets/img/products/habanero.jpg',
    tags: ['pepper', 'orange', 'hot'],
    featured: false,
    supplierId: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2'
  }
];
