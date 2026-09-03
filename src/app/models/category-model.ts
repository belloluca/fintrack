import { TransactionType } from './transaction-type';

export interface Category {
  id: number;
  type: TransactionType;
  name: string;
  color: string;
  icon?: string;
}
