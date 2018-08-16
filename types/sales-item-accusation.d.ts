import { IUser } from './user';
import { ISalesItem } from './sales-item';

export interface ISalesItemAccusation {
  readonly id?: number;
  readonly createdAt?: Date;

  reason: string;     // 신고 사유

  // foreign keys
  userId?: number;
  itemId?: number;
  // salesId?: number;

  // associations
  user?: IUser;
  item?: ISalesItem;
  // sales?: ISales;
}