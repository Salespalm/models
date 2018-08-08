import { IUser } from './user';
import { IOpenPalm } from './open-palm';

export interface IOpenPalmReply {
  readonly id?: string;
  readonly createdAt?: string;

  reply?: string;
  selected?: boolean;

  // foreign keys
  openPalmId?: string;
  fromId?: number;

  // associations
  openPalm: IOpenPalm;
  from?: IUser;
}