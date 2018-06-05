export interface IUserPushMessage {
  readonly id?: string;
  readonly createdAt?: Date;

  message: string;
  data?: any;
  confirm?: boolean;
  userId?: number;
}
