export interface ISalespalmMessage {
  readonly id?: number;
  readonly createdAt?: number;

  message: string;
  data?: any;
}