import {IModel} from './model';
import {ISalesItem} from './sales-item';

export interface ISalesCategoryLv1 extends IModel {
  readonly id?: number;

  name: string;       // 상위 카테고리 이름
  sequence: number;   // 카테고리 순번

  // associations
  children?: ISalesCategoryLv2[]; // 하위 카테고리 목록
  items?: ISalesItem[];           // 상위 카테고리에 포함된 상품 목록
}

export interface ISalesCategoryLv2 extends IModel {
  readonly id?: number;

  name: string;       // 하위 카테고리 이름
  sequence: number;   // 하위 카테고리 순번

  // foreign keys
  parentId?: number;  // 상위 카테고리의 아이디

  // associations
  items?: ISalesItem[]; // 하위 카테고리에 포함된 상품 목록
}
