import { IModel } from './model';
import { ISalesItem } from './sales-item';

export interface ISalesItemRegion extends IModel {
  readonly id?: number;

  country: string;
  state?: string;
  city?: string;

  // associations
  item?: ISalesItem;
  items?: ISalesItem[];
}