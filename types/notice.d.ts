import { IModel } from './model';
import { INoticeImage } from './notice-image';
import { INoticeContentImage } from './notice-content-image';

export interface INotice extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  title: string;
  content: string;
  display: boolean;

  // associations
  images: INoticeImage[];
  contentImages: INoticeContentImage[];
}
