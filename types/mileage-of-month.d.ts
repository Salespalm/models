import { IModel } from './model';

export interface IMileageOfMonth extends IModel {
  readonly id?: number;

  mileage?: number;               // 정회원 기간 동안 쌓인 마일리지
  bonusMileage?: number;          // 정회원 기간 동안 쌓인 보너스 마일리지(세금 제외)
  bonusMileageBeforeTax?: number; // 세금(소득세 + 주민세 = 3.3%)이 붙기 전의 보너스 마일리지
  sumOfRecommendees?: number;     // 추천인들의 인센티브(포인트 + 마일리지) 합계
  incomeTax?: number;             // 소득세
  residenceTax?: number;          // 주민세

  // foreign keys
  userId?: number;
}