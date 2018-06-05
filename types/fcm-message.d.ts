import {IMessageData} from './message';


export interface INotification {
  [key: string]: any;
  title?: string;
  body?: string;
  sound?: string;
  badge?: number;
}

export interface IFcmMessage {
  to: string;
  notification: INotification;
  data: IMessageData;
}