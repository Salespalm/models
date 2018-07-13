import {ISalesItem} from './sales-item';
import {ICategory} from './category';

export interface ISalesCategoryLv1 extends ICategory {
  // associations
  children?: ISalesCategoryLv2[]; // 하위 카테고리 목록
  items?: ISalesItem[];           // 상위 카테고리에 포함된 상품 목록
}

export interface ISalesCategoryLv2 extends ICategory {
  // foreign keys
  parentId?: number;  // 상위 카테고리의 아이디

  // associations
  items?: ISalesItem[]; // 하위 카테고리에 포함된 상품 목록
}
