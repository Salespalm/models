import { IUrlLike } from './file';

export interface INoticeContentImage extends IUrlLike {
  // foreign keys
  noticeId?: number;
}
