export declare type TIncentiveHistory =
  'sales_point'
  | 'recommender_sales_mileage'
  | 'franchise_sales_mileage'
  | 'regular_mileage'
  | 'bonus_mileage';

export declare type TIncentiveStatus =
  'payment_wait'
  | 'stand_by'
  | 'not_regular'
  | 'completion'
  | 'request_refund'
  | 'refund';

export function print() {
  const value = 10;
  console.log(`Value: ${value}`);
}

export interface IIncentiveHistory {
  readonly id?: number;
  readonly createdAt?: Date;

  pointBeforeTax?: number;    // 세금 지급 전 포인트
  mileageBeforeTax?: number;  // 세금 지급 전 마일리지
  point?: number;             // 포인트
  mileage?: number;           // 마일리지
  incomeTax?: number;         // 소득세: 소득세와 주민세의 경우 소득세가 1,000 원 미만일 경우 받지 않음
  residenceTax?: number;      // 주민세
  history: string;            // 히스토리 내역
}