import { IUser } from './user';
import { IModel } from './model';

export interface IBranchOffice extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  tel: string;            // 지사 전화번호
  basicAddress: string;   // 지사 기본 주소
  detailAddress?: string; // 지사 상세 주소
  zipCode: string;        // 지사 우편 번호
  country: string;        // 지사 소속 국가
  state: string;          // 지사 소속 시/도
  city: string;           // 지사 소속 시/군/구

  // foreign keys
  userId?: number;        // 지사와 연결된 회원의 아이디

  // association
  user?: IUser;           // 지사와 연결된 회원 정보
}