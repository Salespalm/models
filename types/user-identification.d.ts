import { IUrlLike } from './file';
import { IUser } from './user';

export declare type TUserIdentificationStatus = 'wait' | 'reject' | 'confirm';

export interface IUserIdentification extends IUrlLike {
  createdAt?: Date;
  updatedAt?: Date;

  status?: TUserIdentificationStatus;

  // foreign keys
  userId?: number;

  // associations
  user?: IUser;
}
