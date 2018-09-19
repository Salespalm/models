import { IUser } from './user';
import { IMembershipSetting, TMembership } from './membership-setting';
import { IModel } from './model';
import { IIamportModel } from './iamport';
import { IPaymentInfo } from './payment-info';


export declare type TMembershipPaymentStatus = 'request_payment' | 'confirm' | 'request_refund' | 'refund';

export interface IMembershipPayment extends IModel, IIamportModel {
  readonly id?: number;
  readonly createdAt?: Date;

  membership: TMembership;
  price?: number;
  point?: number;
  cash?: number;
  recommenderMileage?: number;
  payer?: string;
  period?: [Date ,Date];
  expired?: boolean;
  status?: TMembershipPaymentStatus;
  paymentInfo?: IPaymentInfo;
  payedDate?: Date;
  refundDeadline?: Date;

  // extra fields
  canRefund?: boolean;

  // foreign keys
  userId?: number;
  settingId?: number;

  // associations
  user?: IUser;
  setting?: IMembershipSetting;
}