import { IImage } from './image';

export interface ISalesItemImage extends IImage {
  sequence?: number;

  // foreign keys
  itemId?: number;
}