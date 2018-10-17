import { IUrlLike } from './file';
import { IUser } from './user';

export interface IUserIdentification extends IUrlLike {
  createdAt?: Date;
  updatedAt?: Date;

  // foreign keys
  userId?: number;

  // associations
  user?: IUser;
}
