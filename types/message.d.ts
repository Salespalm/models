export declare type TMessageType =
  /*
   * 회원 가입 관련
   */
    'join-company'    // 업체 가입 -> 관리자에게
  | 'add-recommendee' // 추천가입 -> 추천인에게
  | 'allow-company'   // 회사 승인 -> 업체회원에게
  /*
   * 상품 관련
   */
  | 'modify-product'    // 영업 상품 수정 -> 관리자에게
  | 'register-product'  // 영업 상품 등록(승인될 때) -> 업체회원에게
  /*
   * 영업 관련
   */
  | 'request-sales' // 영업 신청 -> 업체회원에게
  | 'proceed-sales' // 영업 진행 -> 중개회원에게
  | 'cancel-sales'  // 영업 취소 -> 업체회원에게
  | 'reject-sales'  // 영업 거절 -> 중개회원에게
  | 'fail-sales'    // 영업 실패 -> 중개회원에게
  | 'succeed-sales' // 영업 성공 -> 중개회원에게
  | 'request-refund-sales' // 환불 요청 -> 관리자에게
  | 'refund-sales'  // 환불 -> 업체회원에게
  /*
   * 결제 관련
   */
  | 'pay-regular'     // 회원권 결제 -> 회원에게
  | 'pay-commission'  // 수수료 결제 -> 업체회원에게
  ;