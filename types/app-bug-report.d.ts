import {IModel} from './model';
import {IUser} from './user';

export interface IAppBugReport extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  deviceModel: string;  // 기기 모델명
  platform: string;     // 운영체제 이름
  version: string;      // 운영체제 버전
  description: string;  // 오류 내용

  // foreign keys
  userId?: number;      // 버그 레포트를 작성한 회원의 아이디

  // associations
  user?: IUser;         // 버그 레포트를 작성한 회원 정보
}