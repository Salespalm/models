import { IUser } from './user';
import { IBizLicense } from './biz-license';

export declare type TBizClass =
  'personal'        // 개인사업자
  | 'corporation';  // 법인사업자

export interface ICompany {
  readonly id?: number;
  readonly createdAt?: Date;

  name?: string;            // 업체
  registration?: string;    // 사업자등록번호
  bizClass?: TBizClass;     // 사업자 유형
  tel?: string;             // 업체 전화번호
  fax?: string;             // 업체 팩스번호
  allowance?: boolean;      // 업체 승인여부

  zipCode?: string;         // 업체 우편번호
  basicAddress?: string;    // 업체 기본주소
  detailAddress?: string;   // 업체 상세주소
  country?: string;         // 업체 소속 국가
  state?: string;           // 업체 소속 시/도
  city?: string;            // 업체 소속 도식

  // 담당자 정보
  managerName?: string;     // 담당자 이름
  managerEmail?: string;    // 담당자 이메일
  managerPhone?: string;    // 담당자 연락처

  // foreign keys
  userId?: number;          // 업체를 등록한 회원의 아이디

  // associations
  user?: IUser;             // 업체를 등록한 회원 정보
  bizLicense?: IBizLicense; // 업체의 사업자등록증 파일
}