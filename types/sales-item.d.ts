import {IModel} from './model';
import {IUser} from './user';
import {ISalesItemImage} from './sales-item-image';
import {ISalesItemOption} from './sales-item-option';
import {ISales} from './sales';
import {ISalesReview} from './sales-review';
import {ISalesItemRegion} from './sales-item-region';
import {ISalesItemTag} from './sales-item-tag';
import {ISalesItemDescriptionImage} from './sales-item-description-image';
import {ISalesItemAccount} from './sales-item-account';
import {ISalesCategoryLv1, ISalesCategoryLv2} from './sales-category';


export interface ISalesItem extends IModel {
  readonly id?: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;

  name?: string;
  description?: string;
  asPolicy?: string;
  priceRange?: [number, number];
  minCommission?: number;
  maxCommission?: number;
  allowance?: boolean;

  // foreign keys
  userId?: number;
  categoryLv1Id?: number;
  categoryLv2Id?: number;

  images?: ISalesItemImage[];
  options?: ISalesItemOption[];
  sales?: ISales[];
  reviews?: ISalesReview[];
  regions?: ISalesItemRegion[];
  tags?: ISalesItemTag[];
  likers?: IUser[];
  descriptionImages?: ISalesItemDescriptionImage[];
  accounts?: ISalesItemAccount[];

  user?: IUser;
  categoryLv1?: ISalesCategoryLv1;
  categoryLv2?: ISalesCategoryLv2;

  // extra fields
  favorite?: boolean;
  rating?: number | null | undefined;
}