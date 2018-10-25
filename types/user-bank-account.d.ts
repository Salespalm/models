import { IModel } from './model';
import { IBankAccount } from './bank-account';

export interface IUserBankAccount extends IModel, IBankAccount {
  // foreign keys
  userId?: number;
}
