import { IModel } from './model';

export interface IUrlLike {
  url?: string;
}

export interface IFile extends IModel, IUrlLike {
  createdAt?: Date;  // 파일 생성일

  filename?: string;  // 파일 이름
  mimetype?: string;  // 파일의 mime type
  bucket?: string;    // 파일이 등록된 s3 스토리지의 버킷
}
