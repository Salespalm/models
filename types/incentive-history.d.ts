import {IUser} from './user';

export declare type TIncentiveHistory =
  'sales_point'                   // 직접 중개 포인트
  | 'recommender_sales_mileage'   // 중개 추천인에 의한 마일리지
  | 'franchise_sales_mileage'     // 가맹 추천인에 의한 마일리지
  | 'regular_mileage'             // 정회원 구매 시 추천 1대에게 주는 마일리지
  | 'bonus_mileage'               // 보너스 마일리지
  | 'cashback';                   // 포인트를 현금으로 전환

export declare type TIncentiveHistoryStatus =
  'payment_wait'    // 업체 수수료 결제 대기 상태
  | 'stand_by'      // 수수료 결제 후 포인트 지급 대기 상태
  | 'not_regular'   // 정회원이 아니기 때문에 받지 못한 상태
  | 'completion'    // 포인트 및 마일리지 지급 완료 상태
  | 'request_refund'// 환불 요청 상태
  | 'refund';       // 환불 상태

export declare type TIncentiveHistoryRefModelName =
  'Sales';  // ISales 모델(DB 에서는 Sales 모델)

export interface IIncentiveHistoryRef {
  modelName: TIncentiveHistoryRefModelName; // 모델의 이름
  refId: number;                            // DB 에서 연결된 외래키의 아이디
}

export interface IIncentiveHistory {
  readonly id?: number;
  readonly createdAt?: Date;

  pointBeforeTax?: number;          // 세금 지급 전 포인트
  mileageBeforeTax?: number;        // 세금 지급 전 마일리지
  point?: number;                   // 포인트
  mileage?: number;                 // 마일리지
  incomeTax?: number;               // 소득세: 소득세와 주민세의 경우 소득세가 1,000 원 미만일 경우 받지 않음
  residenceTax?: number;            // 주민세
  history: TIncentiveHistory;       // 히스토리 내역
  status: TIncentiveHistoryStatus;  // 보상 지급 상태
  payoff?: Date;                    // 포인트 또는 마일리지 지급일
  payedDate?: Date;                 // 실 지급일

  // foreign keys
  toId?: number;
  fromId?: number;
  refId?: number;

  // associations
  to?: IUser;
  from?: IUser;
  ref?: IIncentiveHistoryRef;
}