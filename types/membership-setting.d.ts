export declare type TMembership = 'regular';

export interface IMembershipSettingItem {
  readonly id?: number;

  name: TMembership;          // 회원권 이름
  price: string;              // 회원권 가격
  recommenderMileage: number; // 추천인에게 지급되는 마일리지
  period: number;             // 회원권 기간
  dueDay: number;             // 결제 기한(결제 요청일로부터의 일 수)
  refundDay: number;          // 환불 가능 일수(결제일로부터의 일 수)

  //foreign keys
  settingId?: number;
}

export interface IMembershipSetting {
  readonly id?: number;

  // associations
  settings?: IMembershipSettingItem[];  // 설정들
}