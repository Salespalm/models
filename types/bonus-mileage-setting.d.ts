import {IModel} from './model';

export interface IBonusMileageSetting extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  commission: number;         // 보너스 마일리지 퍼센티지
}