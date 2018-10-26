import { IUser } from './user';

export declare type TUserWithdrawalStatus = 'wait' | 'reject' | 'confirm';

export interface IUserWithdrawal {
  id?: string;
  createdAt?: Date;
  withdrawnDate?: Date;

  point: number;
  transferFee: number;
  status?: TUserWithdrawalStatus;

  // foreign key
  userId?: number;

  // associations
  user?: IUser;
}
