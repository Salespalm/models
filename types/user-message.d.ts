import { TMessageType } from './message';

export interface IUserMessage {
  readonly id?: string;
  readonly createdAt?: Date;

  message: string;
  messageType: TMessageType;
  data?: any;
  confirm?: boolean;
  userId?: number;
}
