import { IModel } from './model';
import { IBankAccount } from './bank-account';
import { IUser } from './user';

export declare type TUserBankAccountStatus = 'wait' | 'confirm' | 'reject';

export interface IUserBankAccount extends IModel, IBankAccount {

  status?: TUserBankAccountStatus;

  // foreign keys
  userId?: number;

  // associations
  user?: IUser;
}
