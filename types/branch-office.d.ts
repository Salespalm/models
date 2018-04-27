import {IUser} from './user';
import {IModel} from './model';

export interface IBranchOffice extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  tel: string;
  basicAddress: string;
  detailAddress: string;
  zipCode: string;
  country: string;
  state: string;
  city: string;

  // foreign keys
  userId?: number;

  // association
  user?: IUser;
}