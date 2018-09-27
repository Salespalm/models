import { IModel } from './model';
import { IAccount } from './account';

export interface ISalesItemAccount extends IModel, IAccount {
  // foreign keys
  itemId?: number;
}