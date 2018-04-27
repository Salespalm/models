import {IFile} from './file';

export interface IImage extends IFile {
  readonly small?: string;
  readonly medium?: string;
  readonly large?: string;
}