import { IUser } from './user';

export declare type TUserWithdrawalStatus = 'wait' | 'reject' | 'confirm';

export interface IUserWithdrawal {
  point: number;
  transferFee: number;
  status?: TUserWithdrawalStatus;

  createdAt?: Date;

  // foreign key && primary key
  userId?: number;

  // associations
  user?: IUser;
}
