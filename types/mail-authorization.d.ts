export interface IMailAuthorization {
  // 이메일 인증을 위한 모델
  readonly createdAt?: Date;  // 모델 생성 시간
  readonly updatedAt?: Date;  // 모델 수정 시간
  email: string;              // 이메일
  token: string;              // 이메일에 대한 인증 토큰
}