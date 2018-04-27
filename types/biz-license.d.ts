import {IFile} from './file';

export interface IBizLicense extends IFile {
  // foreign keys
  companyId?: number;
}