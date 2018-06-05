import {IMessageData} from './message';

export interface IUserMessage {
  readonly id?: string;
  readonly createdAt?: Date;

  message: string;
  data?: any;
  confirm?: boolean;
  userId?: number;
}

export interface IRecommendeeMessageData extends IMessageData {
  recommendee: number;  // 추천한 사람의 아이디
  recommender: number;         // 추천 받은 사람의 아이디
}

export interface IRecommendeeMessage extends IUserMessage {
  data: IRecommendeeMessageData;
}