export interface IFile {
  readonly url?: string;
  readonly createdAt?: Date;

  filename?: string;
  mimeType?: string;
  bucket?: string;
}