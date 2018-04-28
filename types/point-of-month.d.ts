import {IModel} from './model';

export interface IPointOfMonth extends IModel {
  readonly id?: number;

  point?: number;   // 추천인이 정회원인 동안 쌓은 포인트
  mileage?: number; // 추천인이 정회원인 동안 쌓은 마일리지

  // foreign keys
  userId?: number;
}
