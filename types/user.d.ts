import { IModel } from './model';
import { IUserImage } from './user-image';
import { IUserSetting } from './user-setting';
import { ICompany } from './company';
import { IBranchOffice } from './branch-office';
import { IPoint } from './point';
import { IMembershipPayment } from './membership-payment';
import { IIncentiveHistory } from './incentive-history';
import { IMileageOfMonth } from './mileage-of-month';
import { IPointOfMonth } from './point-of-month';
import { ISalesItem } from './sales-item';
import { IUserAddressBook } from './user-address-book';
import { IUserAccount } from './user-account';

export declare type TRole =
  'admin'             // 관리자
  | 'broker'          // 중개회원
  | 'company'         // 업체회원
  | 'general'         // 일반회원
  | 'regular'         // 정회원
  | 'branch_office'   // 지사회원
  | 'staff';          // 직원

export declare type TAuthorization = 'email' | 'self' | 'account';
export declare type TSex = 'M' | 'F';

export interface IUser extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  email: string;
  password?: string;
  provider?: string;
  providerId?: string;

  roles?: TRole[];
  authorizations?: TAuthorization[];

  name: string;
  nickname: string;
  mobile?: string;
  sex?: TSex;
  withdraw?: boolean;

  // foreign keys
  recommenderId?: number;

  // associations
  image?: IUserImage;
  settings?: IUserSetting[];
  company?: ICompany;
  branchOffice?: IBranchOffice;
  recommender?: IUser;
  recommendees?: IUser[];
  point?: IPoint;
  membershipPayments?: IMembershipPayment[];
  incentiveHistories?: IIncentiveHistory[];
  mileageOfMonth?: IMileageOfMonth;
  pointOfMonth?: IPointOfMonth;
  favorite?: ISalesItem;
  favorites?: ISalesItem[];
  addresses?: IUserAddressBook[];
  account?: IUserAccount;
}