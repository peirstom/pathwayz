import { User } from './data.service';

export const users: User[] = [
  {
    id: '2doBbUNZtEcqsuPIRxe4Wfc7Z9C3',
    isSupplier: false,
    lastName: 'Doe',
    name: 'John',
    email: 'johndoe@gmail.com',
    favorites: ['3'],
    image: '../../assets/img/theme/team-4-800x800.jpg'
  },
  {
    id: '2',
    isSupplier: false,
    lastName: 'Dick',
    name: 'Moby',
    email: 'mobydick@gmail.com',
    favorites: ['3'],
    image: '../../assets/img/theme/team-3-800x800.jpg'
  },
  {
    id: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2',
    email: 'pickerfarm@gmail.com',
    title: 'Picker Farm',
    description: 'Specialize in jalapenos, anaheim bell peppers, pickling cucumbers, tomatillos, and zucchini.',
    detailedDescription: 'Established in 1978, Picker Farm is a vertically integrated grower/shipper/processor of fresh, nutritious, ready-to-eat vegetables and herbs. We grow and process premium quality products geared to meet the needs of restaurants, foodservice distributors, industrial, retail, club store, and institutional accounts.',
    category: 'Vegetables',
    address: '32 De Verteuil St, Port of Spain, Trinidad and Tobago',
    businessOperations: ['Broker', 'Grower', 'Shipper', 'Wholesaler'],
    subCategory: '',
    favorites: [],
    featured: true,
    image: '../../assets/img/suppliers/pickerfarm.jpg',
    isSupplier: true,
    lastName: 'Farm',
    name: 'Picker',
    tags: ['jalapeno', 'pepper', 'herbs', 'mint'],
  },
  {
    id: 'u2',
    email: '',
    title: 'fresh foods',
    description: 'Fresh foods is a leading produce wholesaler on The Produce Terminal in Trinidad & Tobago.' +
    ' We have been selling the freshest produce Trinidad & Tobago has to offer for over a century- since 1906.',
    category: '',
    subCategory: '',
    favorites: [],
    featured: true,
    image: '../../assets/img/suppliers/freshfoods.jpg',
    isSupplier: true,
    lastName: '',
    name: '',
    tags: ['habanero', 'pepper', 'herbs', 'basil']
  },
  {
    id: 'u3',
    email: '',
    title: 'Trini Produce',
    description: 'Trini Produce is an aquaculture farm supplying high quality herbs and spice for restaurant products' +
    ' for use in crop yield enhancement and aquaculture yield enhancement.' +
    ' We are a leading environmental biotech company with our Trinidad & Tobago',
    category: '',
    subCategory: '',
    favorites: [],
    featured: true,
    image: '../../assets/img/suppliers/triniproduce.jpg',
    isSupplier: true,
    lastName: '',
    name: '',
    tags: ['Anaheim', 'pepper', 'herbs', 'parsley']

  },
  {
    id: 'u4',
    email: '',
    title: 'The right foods',
    description: 'The right foods is the South\'s premier grower of bell peppers, pole cucumbers, eggplant,' +
    ' straight neck squash, zucchini and specialty peppers. We are strategically located in T&T.',
    category: '',
    subCategory: '',
    favorites: [],
    featured: true,
    image: '../../assets/img/suppliers/rightfoods.jpg',
    isSupplier: true,
    lastName: '',
    name: '',
    tags: ['bell', 'pepper', 'herbs', 'thyme']
  }
];
