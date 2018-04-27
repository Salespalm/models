import {IModel} from './model';

export declare type TUserSettingName = 'AUTO_REGULAR_PAYMENT';

export interface IUserSetting extends IModel {
  readonly id?: number;

  name: TUserSettingName;
  value: string;

  userId?: number;
}