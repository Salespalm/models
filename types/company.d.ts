import {IUser} from './user';
import {IBizLicense} from './biz-license';

export declare type TBizClass = 'personal' | 'corporation';

export interface ICompany {
  readonly id?: number;
  readonly createdAt?: Date;

  name: string;
  registration: string;
  bizClass: TBizClass;
  tel: string;
  fax?: string;
  allowance: boolean;

  zipCode: string;
  basicAddress: string;
  detailAddress: string;
  country: string;
  state: string;
  city?: string;

  // 담당자 정보
  managerName: string;
  managerEmail: string;
  managerPhone: string;

  // foreign keys
  userId?: string;

  // associations
  user?: IUser;
  bizLicense?: IBizLicense;
}