import {IImage} from './image';

export interface IUserImage extends IImage {
  readonly small?: string;
  readonly medium?: string;
  readonly large?: string;
}