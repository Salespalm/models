import {IImage} from 'image';

interface IUserImage extends IImage {
  readonly small?: string;
  readonly medium?: string;
  readonly large?: string;
}