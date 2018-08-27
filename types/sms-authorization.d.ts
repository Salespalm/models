export interface ISMSAuthorization {
  phoneNumber: string;
  code?: string;
  numberOfRequest?: number;
  authorized?: boolean;
}
