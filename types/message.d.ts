export declare type TMessageType =
  'add-recommendee' // 추천가입
  | 'request-sales' // 영업신청
  ;

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
  appLink?: IMessageAppLink;
}

