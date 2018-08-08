import { IOpenPalmReply } from './open-palm-reply';
import { ISalesCategoryLv1, ISalesCategoryLv2 } from './sales-category';
import { IUser } from './user';

export interface IOpenPalm {
  readonly id?: string;
  readonly createdAt?: Date;

  title?: string;
  description?: string;
  close?: boolean;      // 업체를 선택한 경우 true 로 변경

  // foreign keys
  userId?: number;
  categoryLv1Id?: number;
  categoryLv2Id?: number;

  // associations
  user?: IUser;
  replies?: IOpenPalmReply[];
  categoryLv1?: ISalesCategoryLv1;
  categoryLv2?: ISalesCategoryLv2;
}
