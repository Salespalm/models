export interface IUserAddressBook {
  readonly id?: number;
  basicAddress: string;
  detailAddress: string;
  zipCode: string;

  // foreign keys
  userId?: number;
}