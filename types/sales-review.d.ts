import { IModel } from './model';
import { IUser } from './user';

export interface ISalesReview extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  rating: number;   // 영업에 대한 평점
  review: string;   // 리뷰

  // associations
  userId?: number;
  itemId?: number;
  salesId?: number;

  // associations
  user?: IUser;
}