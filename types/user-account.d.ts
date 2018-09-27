import { IModel } from './model';
import { IAccount } from './account';

export interface IUserAccount extends IModel, IAccount {
  // foreign keys
  userId?: number;
}
