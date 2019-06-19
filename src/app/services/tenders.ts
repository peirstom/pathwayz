//import { Tender } from './data.service';

export interface Tender {
  id: string;
  productName: string;
  buyerId: string;
  category: string;
  subCategory?: string;
  status: string; //'posted' | 'canceled' | 'completed';
  price: number;
  dueDate: string;
}
/*
export const tenders: Tender[] = [
  {
    buyerId: '2doBbUNZtEcqsuPIRxe4Wfc7Z9C3',
    category: 'Vegetables',
    status: 'posted',
    id: '1',
    price: 30,
    productName: 'Tomatoes',
    dueDate: '2019/04/09'
  },
  {
    buyerId: '2doBbUNZtEcqsuPIRxe4Wfc7Z9C3',
    category: 'Vegetables',
    status: 'posted',
    id: '2',
    price: 30,
    productName: 'Mint',
    dueDate: '2019/04/09'
  },
  {
    buyerId: '2',
    category: 'Vegetables',
    status: 'posted',
    id: '3',
    price: 30,
    productName: 'Peppers',
    dueDate: '2019/04/09'
  },
  {
    buyerId: '2doBbUNZtEcqsuPIRxe4Wfc7Z9C3',
    category: 'Beauty',
    status: 'posted',
    id: '3',
    price: 30,
    productName: 'Hair Spray',
    dueDate: '2019/04/09'
  }
];
*/
