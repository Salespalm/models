export declare type TMessageType =
  'add-recommendee' // 추천가입
  | 'request-sales' // 영업신청
  ;

export declare type TMobileAppLink = 'RecommendeeListPage';
export declare type THomepageLink = '';
export declare type TAdminAppLink = '';
export declare type TCompanyAppLink = '';

export interface IAppLink {
  link: string;
  data?: any;
}

export interface IMobileAppLink extends IAppLink {
  link: TMobileAppLink;
}

export interface IHomepageLink extends IAppLink {
  link: THomepageLink;
}

export interface ICompanyAppLink extends IAppLink {
  link: TCompanyAppLink;
}

export interface IAdminAppLink extends IAppLink {
  link: TAdminAppLink;
}

export interface IMessageAppLink {
  mobile?: IMobileAppLink;
  homepage?: IHomepageLink;
  company?: ICompanyAppLink;
  admin?: IAdminAppLink;
}

export interface IMessageData {
  [key: string]: any;
  appLink?: IMessageAppLink;
}

