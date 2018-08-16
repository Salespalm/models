export declare type TMessageType =
  /*
   * 회원 가입 관련
   */
  'join-company' |        // 업체 가입 -> 관리자에게
  'add-recommendee' |     // 추천가입 -> 추천인에게
  'allow-company' |       // 회사 승인 -> 업체회원에게
  'regular-recommendee' | // 추천인이 정회원이 되었을 때
  /*
   * 상품 관련
   */
  'modify-product' |      // 영업 상품 수정 -> 관리자에게
  'allow-product' |       // 영업 상품 등록(승인될 때) -> 업체회원에게
  /*
   * 영업 관련
   */
  'request-sales' |         // 영업 신청 -> 업체회원에게
  'proceed-sales' |         // 영업 진행 -> 중개회원에게
  'cancel-sales' |          // 영업 취소 -> 업체회원에게
  'reject-sales' |          // 영업 거절 -> 중개회원에게
  'fail-sales' |            // 영업 실패 -> 중개회원에게
  'succeed-sales' |         // 영업 성공 -> 중개회원에게
  'request-refund-sales' |  // 환불 요청 -> 관리자에게
  'refund-sales' |          // 환불 -> 업체회원에게
  /**
   * 오픈팜 관련
   */
  'register-open-palm-reply' |  // 댓글이 등록되었을 경우 -> 오픈팜 작성 회원에게
  'select-open-palm-reply' |    // 댓글이 선택되었을 경우 -> 댓글 작성 업체에게
  /*
   * 결제 관련
   */
  'payment-regular' |   // 정회원 구입 -> 구입한 회원에게
  'payment-sales';      // 수수료 결제 -> 업체회원에게