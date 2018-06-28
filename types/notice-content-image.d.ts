import {IFile} from './file';

export interface INoticeContentImage extends IFile {
  // foreign keys
  noticeId?: number;
}