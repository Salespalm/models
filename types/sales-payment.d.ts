import { IModel } from './model';
import { IUser } from './user';
import { ISales } from './sales';
import { IPaymentInfo } from './payment-info';
import { IIamportModel } from './iamport';

export declare type TSalesPaymentStatus =
    'payment_wait'      // 결제 대기 상태
  | 'request_payment'   // 결제 요청 상태
  | 'confirm';          // 결제 완료 상태

export interface ISalesPayment extends IModel, IIamportModel {
  readonly id?: number;
  readonly createdAt?: Date;
  price?: number;                 // 결제 금액
  point?: number;                 // 포인트에 의한 결제가
  status?: TSalesPaymentStatus;   // 결제 진행 상태
  dueDate?: Date;                 // 결제 기한
  payedDate?: Date;               // 실 결제일

  // foreign keys
  userId?: number;                          // 결제를 해야 하는 (업체)회원의 아이디

  // associations
  user?: IUser;        // 결제하는 (업체)회원 정보
  sales?: ISales[];    // 결제를 하는 영업에 대한 목록
}