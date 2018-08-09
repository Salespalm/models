export interface IUserAddressBook {
  readonly id?: number;
  readonly usedDate?: Date;
  basicAddress: string;
  detailAddress: string;
  zipCode: string;

  // foreign keys
  userId?: number;
}