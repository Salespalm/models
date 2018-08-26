import { IModel } from './model';

export interface IPaymentInfo extends IModel {
  amount?: number;
  apply_num?: string;
  bank_code?: string;
  bank_name?: string;
  buyer_addr?: string;
  buyer_email?: string;
  buyer_name?: string;
  buyer_postcode?: string;
  buyer_tel?: string;
  cancel_amount?: number;
  cancel_history?: any[];
  cancel_reason?: string;
  cancel_receipt_urls?: string[];
  cancelled_at?: number;
  card_code?: string;
  card_name?: string;
  card_quota?: number;
  cash_receipt_issued?: boolean;
  channel?: string;
  currency?: string;
  custom_data?: any;
  escrow?: boolean;
  fail_reason?: string;
  failed_at?: number;
  imp_uid: string;
  merchant_uid: string;
  name?: string;
  paid_at?: number;
  pay_method?: string;
  pg_id?: string;
  pg_provider?: string;
  pg_tid?: string;
  receipt_url?: string;
  status?: string;
  user_agent?: string;
  vbank_code?: string,
  vbank_date?: number,
  vbank_holder?: string,
  vbank_name?: string,
  vbank_num?: string,
}

