import { IUser } from './user';
import { IMembershipSetting, TMembership } from './membership-setting';
import { IModel } from './model';
import { IIamportModel } from './iamport';


export declare type TMembershipPaymentStatus = 'request_payment' | 'confirm' | 'request_refund' | 'refund';

export interface IMembershipPayment extends IModel, IIamportModel {
  readonly id?: number;
  readonly createdAt?: Date;

  membership: TMembership;
  price: number;
  cash?: number;
  point?: number;
  recommenderMileage?: number;
  payer?: string;
  period?: [Date ,Date];
  expired?: boolean;
  status?: TMembershipPaymentStatus;
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