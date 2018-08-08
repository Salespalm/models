import { IUser } from './user';

export interface IOpenPalmReply {
  readonly id?: string;
  readonly createdAt?: string;
  reply?: string;

  // foreign keys
  fromId?: number;
  openPalmId?: number;

  // associations
  from?: IUser;
}