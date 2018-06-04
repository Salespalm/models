export declare type TPlatform = 'android' | 'ios' | 'browser';

export interface IUserPushToken {
  token: string;
  platform: TPlatform;

  // foreign keys
  userId: number;
}
