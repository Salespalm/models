import { IModel } from './model';
import { IBankAccount } from './bank-account';

export declare type TUserBankAccountStatus = 'wait' | 'confirm' | 'reject';

export interface IUserBankAccount extends IModel, IBankAccount {

  status?: TUserBankAccountStatus;

  // foreign keys
  userId?: number;
}
