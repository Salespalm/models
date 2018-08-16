import { IModel } from './model';
import { ISalesItem } from './sales-item';

export interface ISalesItemTag extends IModel {
  readonly id?: number;
  name: string;

  // associations
  item?: ISalesItem;
  items?: ISalesItem[];
}