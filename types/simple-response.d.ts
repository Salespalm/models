import { IModel } from './model';

export interface ISimpleResponse extends IModel {
  success: boolean;
  [prop: string]: any;
}