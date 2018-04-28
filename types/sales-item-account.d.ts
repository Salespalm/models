import {IModel} from './model';

export interface ISalesItemAccount extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  bank?: string;
  number?: string;
  holder?: string;

  // foreign keys
  itemId?: string;
}