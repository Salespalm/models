import {IModel} from './model';
import {ILanguage} from './language';

export interface ISimpleResponse extends IModel {
  success: boolean;
  message?: ILanguage | string;
}