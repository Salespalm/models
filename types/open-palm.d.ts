import { IOpenPalmReply } from './open-palm-reply';
import { ISalesCategoryLv1, ISalesCategoryLv2 } from './sales-category';
import { IUser } from './user';
import { ISales } from './sales';

export interface IOpenPalm {
  readonly id?: string;
  readonly createdAt?: Date;

  title?: string;
  description?: string;
  closed?: boolean;      // 업체를 선택한 경우 true 로 변경
  country?: string;
  state?: string;
  city?: string;
  consumerName?: string;
  consumerPhone?: string;

  // foreign keys
  userId?: number;
  categoryLv1Id?: number;
  categoryLv2Id?: number;
  salesId?: number;

  // associations
  user?: IUser;
  categoryLv1?: ISalesCategoryLv1;
  categoryLv2?: ISalesCategoryLv2;
  sales?: ISales;
  replies?: IOpenPalmReply[];
}
