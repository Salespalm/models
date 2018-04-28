import {IModel} from './model';

export interface INotice extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  title: string;
  content: string;
}