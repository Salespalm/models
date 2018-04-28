import {IImage} from './image';

export interface ISalesItemOptionImage extends IImage {
  sequence?: number;

  // foreign keys
  optionsId?: number;
}