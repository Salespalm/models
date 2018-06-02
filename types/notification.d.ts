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
  title: string;
  body: string;
}

export interface IFcmMessage {
  to: string;
  notification: INotification;
  data: INotificationData;
}