import { IImage } from './image';

export interface IUserImage extends IImage {

  // foreign keys
  userId?: number;
}