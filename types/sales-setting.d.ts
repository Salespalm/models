export interface ISalesSetting {
  readonly id?: number;
  readonly createdAt?: Date;

  brokerIncentive: number;        // 중개인에게 돌아가는 인센티브 비율
  recommenderIncentive: number;   // 중개 추천인에게 돌아가는 인센티브 비율
  franchiseIncentive: number;     // 가맹 추천인에게 돌아가는 인센티브 비율
  refundDay: number;              // 청약 철회 기간
  dueDay: number;                 // 첫 거래 발생부터 수수료 지불 기간
  limitPaymentSum: number;        // 수수료 결제 제한 금액(이 금액이 넘어가면 기간 상관없이 결제를 해야 함)
}