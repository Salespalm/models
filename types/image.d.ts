import {IFile} from './file';

export interface IImage extends IFile {
  small?: string;  // 작은 크기의 이미지 파일 url(폭과 높이 중 가장 큰 쪽을 320px로 맞춤)
  medium?: string; // 중간 크기의 이미지 파일 url(폭과 높이 중 가장 큰 쪽을 640px로 맞춤)
  large?: string;  // 큰 크기의 이이지 파일 url(폭과 높이 중 가장 큰 쪽을 1280px로 맞춤)
}