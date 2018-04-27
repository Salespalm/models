import {IModel} from './model';

export interface IPoint extends IModel {
  readonly id?: number;
  total?: number;

  // foreign keys
  userId?: number;
}