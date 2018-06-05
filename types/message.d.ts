export declare type TMessageType = 'add recommendee';

export declare type TMobileAppLink = 'RecommendeeListPage';
export declare type THomepageLink = '';
export declare type TAdminAppLink = '';
export declare type TCompanyAppLink = '';

export interface IMessageAppLink {
  mobile?: TMobileAppLink;
  homepage?: THomepageLink;
  admin?: TAdminAppLink;
  company?: TCompanyAppLink;
}

export interface IMessageData {
  [key: string]: any;
  notificationType: TMessageType;
  appLink?: IMessageAppLink;
  userPushMessageId?: string;
  salesPalmPUshMessageId?: number;
}
