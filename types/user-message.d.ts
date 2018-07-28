import {IMessageData, TMessageType} from './message';

export interface IUserMessage {
  readonly id?: string;
  readonly createdAt?: Date;

  message: string;
  messageType: TMessageType;
  data?: IMessageData;
  confirm?: boolean;
  userId?: number;
}

// export interface IRecommendeeMessageData extends IMessageData {
//   recommendee: number;  // 추천한 사람의 아이디
// }
//
// export interface IRecommendeeMessage extends IUserMessage {
//   data: IRecommendeeMessageData;
// }
