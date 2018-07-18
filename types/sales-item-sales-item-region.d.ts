export interface ISalesItemSalesItemRegion {
  // 상품과 영업 지역을 연결하기 위한 모델
  readonly itemId: number;    // 상품의 아이디
  readonly regionId: number;  // 지역의 아이디
  sequence?: number;
}