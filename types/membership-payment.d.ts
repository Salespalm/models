import { IUser } from './user';
import { IMembershipSetting, TMembership } from './membership-setting';
import { IModel } from './model';
import { IPaymentInfo } from './payment-info';

export declare type TMembershipPaymentStatus = 'request_payment' | 'confirm' | 'request_refund' | 'refund';

export interface IMembershipPayment extends IModel {
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
  paymentInfo?: IPaymentInfo;                 // Import 결제 정보
  payedDate?: Date;
  refundDeadline?: Date;

  // foreign keys
  userId?: number;
  settingId?: number;

  // associations
  user?: IUser;
  setting?: IMembershipSetting;
}