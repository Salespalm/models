import { IModel } from './model';

export interface IPaymentInfo extends IModel {
  imp_uid: string;
  merchant_uid: string;
}