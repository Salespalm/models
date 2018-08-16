import { IFile } from './file';

export interface IBizLicense extends IFile {
  // foreign keys
  companyId?: number; // 사업자등록증 파일을 등록한 업체 회원 아이디
}