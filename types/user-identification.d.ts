import { IUrlLike } from './file';
import { IUser } from './user';

export interface IUserIdentification extends IUrlLike {
  confirm: boolean;

  // foreign keys
  userId: number;

  // associations
  user: IUser;
}
