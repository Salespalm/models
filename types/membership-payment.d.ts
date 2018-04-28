import {IUser} from './user';
import {IMembershipSetting, TMembership} from './membership-setting';
import {IModel} from './model';

export declare type TMembershipPaymentStatus = 'request_payment' | 'confirm' | 'request_refund' | 'refund';
export declare type TMembershipPaymentMethod = 'account_transfer' | 'auto_point_payment';

export interface IMembershipPayment extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  membership: TMembership;
  price: number;
  cash?: number;
  point?: number;
  recommenderMileage?: number;
  paymentMethod?: TMembershipPaymentMethod;
  payer?: string;
  period?: [Date ,Date];
  expired?: boolean;
  status?: string;
  paymentDeadline?: Date;
  payedDate?: Date;
  refundDeadline?: Date;

  // foreign keys
  userId?: number;
  settingId?: number;

  // associations
  user?: IUser;
  setting?: IMembershipSetting;
}