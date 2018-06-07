export interface ISalespalmMessage {
  readonly id?: number;
  readonly createdAt?: number;

  message: string;
  messageType: string;
  data?: any;
}