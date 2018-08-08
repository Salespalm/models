import {ISalesItem} from './sales-item';
import {ISalesItemOptionImage} from './sales-item-option-image';

export interface ISalesItemOption {
  readonly id?: number;
  readonly createdAt?: Date;

  name: string;
  priceRange: [number, number];
  sequence: number;

  // foreign keys
  itemId?: number;

  // associations
  item?: ISalesItem;
  images?: ISalesItemOptionImage[];
}