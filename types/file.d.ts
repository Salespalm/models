export interface IFile {
  url?: string;      // 파일의 URL
  createdAt?: Date;  // 파일 생성일

  filename?: string;  // 파일 이름
  mimeType?: string;  // 파일의 mime type
  bucket?: string;    // 파일이 등록된 s3 스토리지의 버킷
}