import { User } from './data.service';

export const users: User[] = [
  {
    id: '2doBbUNZtEcqsuPIRxe4Wfc7Z9C3',
    isSupplier: false,
    lastName: 'Doe',
    name: 'John',
    email: 'johndoe@gmail.com',
    favorites: ['3']
  },
  {
    id: '9dMXV3fXQKeL6hnkkBMZ5VqcANF2',
    email: 'pickerfarm@gmail.com',
    title: 'Picker Farm',
    description: 'Specialize in jalapenos, anaheim bell peppers, pickling cucumbers, tomatillos, and zucchini.',
    category: '',
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
