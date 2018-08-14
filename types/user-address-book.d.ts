export interface IUserAddressBook {
  readonly id?: number;
  readonly usedAt?: Date;
  zipCode: string;
  basicAddress: string;
  detailAddress?: string;

  // foreign keys
  userId?: number;
}