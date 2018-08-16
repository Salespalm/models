import { IModel } from './model';

export interface IPoint extends IModel {
  readonly id?: number;
  total?: number;       // 적립된 포인트 총액

  // foreign keys
  userId?: number;      // 포인트를 보유한 회원의 아이디
}