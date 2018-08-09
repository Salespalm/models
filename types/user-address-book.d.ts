export interface IUserAddressBook {
  readonly id?: number;
  readonly usedDate?: Date;
  zipCode: string;
  basicAddress: string;
  detailAddress?: string;

  // foreign keys
  userId?: number;
}