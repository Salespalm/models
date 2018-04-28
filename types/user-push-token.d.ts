export declare type TUserPushTokenPlatform =
  'android'
  | 'ios'
  | 'browser';

export interface IUserPushToken {
  platform: TUserPushTokenPlatform;
  token: string;

  // foreign keys
  userId: number;
}