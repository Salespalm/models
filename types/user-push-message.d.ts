export interface IUserPushMessage {
  readonly id?: number;
  readonly createdAt?: Date;

  message: string;
  data: any;
  confirm: boolean;
  userId?: number;
}
