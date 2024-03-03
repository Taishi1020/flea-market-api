import { ItemsStatus } from './item-status';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemsStatus;
}
