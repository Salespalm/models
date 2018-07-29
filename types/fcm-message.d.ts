export interface INotification {
  [key: string]: any;
  title?: string;
  body?: string;
  sound?: string;
  badge?: number;
}

export interface IPushMessageData {
  [key: string]: any;
  userMessageId?: string;
  salesPalmMessageId?: number;
}

export interface IFcmMessage {
  to: string;
  notification: INotification;
  data: IPushMessageData;
}
