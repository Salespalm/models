import { IModel } from './model';
import { IUser } from './user';
import { ISalesItem } from './sales-item';

export declare type TSalesStatus =
    'stand_by'        // 영업 대기 상태
  | 'cancel'        // 영업 취소 상태 - 중개인에 의해서 취소됨
  | 'progression'   // 영업 진행 상태
  | 'payment_wait'  // 영업 수수료 결제 대기 상태
  | 'completion'    // 영업 완료 상태
  | 'failure'       // 영업 실패 상태
  | 'reject'        // 영업 거절 상태
  | 'request_refund'// 환불 요청 상태
  | 'refund';       // 환불 상태

export interface ISalesCounter {
  all?: number;           // 전체 영업 수
  standBy?: number;       // 대기 영업 수
  cancel?: number;        // 영업 취소 수
  progression?: number;   // 진행중인 영업 수
  paymentWait?: number;   // 결재 대기 영업 수
  completion?: number;    // 완료된 영업 수
  failure?: number;       // 실패 영업 수
  reject?: number;        // 거절 영업 수
  requestRefund?: number; // 환불 요청 상태 영업 수
  refund?: number;        // 환불 영업 수
}

// 영업에 대한 계산서 항목
// export interface ISalesBill {
//   id?: number;
//
//   name: string;   // 항목 이름
//   price: number;  // 가격
//
//   // foreign keys
//   salesId?: number;
// }

// 영수증 정보
export interface ISalesReceipt {
  readonly id?: number;

  approvalNumber: string; // 승인번호
  approvalDate: Date;     // 승인 날짜

  // foreign keys
  salesId?: number;
}

export interface ISales extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  description?: string;   // 소비자 요구사항 설명
  consumerName?: string;  // 소비자 이름
  consumerPhone?: string; // 소비자 연락처

  reason?: string;        // 영업 거절, 취소, 실패 사유
  status?: TSalesStatus;  // 영업 진행 상태
  totalPrice?: number;    // 총 영업 거래 금액

  totalCommissionWithVAT?: number;  // 수수료 지급 총액(VAT 포함)
  totalCommission?: number;     // 수수료 지급 총액(VAT 미포함, 이 값으로 포인트와 마일리지 분배)

  // foreign keys
  fromId?: number;    // 중개인 회원 아이디
  toId?: number;      // 업체 회원 아이디
  itemId?: number;    // 영업 아이템 아이디
  boxId?: number;     // 세일즈 박스 아이디
  paymentId?: number; // 결제 아이디

  // associations
  from?: IUser;             // 영업을 신청한 (중개)회원 정보
  to?: IUser;               // 영업을 신청받은 (업체)회원 정보
  item?: ISalesItem;        // 영업에 대한 상품 정보
  // bills?: ISalesBill[];     // 영업 성사에 따른 소비자 구매 내역 정보들
  receipt?: ISalesReceipt;  // 영수증 정보
}
