import { IPaymentInfo } from './payment-info';

export interface IIamportModel {
  payer?: string;
  cash?: number;
  paymentInfo?: IPaymentInfo;
}
