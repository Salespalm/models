import { IModel } from './model';
import { INoticeImage } from './notice-image';

export interface INotice extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;

  title: string;
  content: string;
  display: boolean;

  // associations
  image: INoticeImage;
}
