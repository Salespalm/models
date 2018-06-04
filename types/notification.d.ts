export declare type TNotificationType =
  'add recommendee';

export declare type TMobilePage =
  'RecommendeeListPage';

export interface INotificationData {
  [key: string]: any;

  notificationType: TNotificationType;
  mobilePage?: TMobilePage;
}

export interface INotification {
  [key: string]: any;
  title: string;
  body: string;
  sound: string;
}

export interface IFcmMessage {
  to: string;
  notification: INotification;
  data: INotificationData;
}