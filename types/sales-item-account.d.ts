import { IModel } from './model';
import { IBankAccount } from './bank-account';

export interface ISalesItemAccount extends IModel, IBankAccount {
  // foreign keys
  itemId?: number;
}