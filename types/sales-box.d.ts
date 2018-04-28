import {ISales} from './sales';

export interface ISalesBox {
  readonly id?: number;
  size: number;     // 세일즈 박스 크기

  // foreign keys
  userId?: number;  // 세일즈 박스 소유 회원 아이디

  // associations
  sales?: ISales[]; // 세일즈 박스에 담긴 영업 목록
}