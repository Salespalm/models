import {IImage} from './image';

export interface INoticeImage extends IImage {

  // foreign keys
  noticeId?: number;
}