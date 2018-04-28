export interface ISMS {
  dest_phone: string;   // 여러개의 폰에 문자를 보낼시 콤마(,)로 구분
  send_phone?: string;   // 발신자의 전화번호
  send_name?: '세일즈팜';  // 발신자의 이름
  subject?: string;      // 메시지 제목
  msg_body: string;
}