import {IModel} from './model';

export interface ISalesItemAccount extends IModel {
  id?: number;
  createdAt?: Date;

  bank?: string;
  number?: string;
  holder?: string;

  // foreign keys
  itemId?: string;
}