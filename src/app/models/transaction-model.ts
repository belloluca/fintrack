import { TransactionType } from './transaction-type';

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  date: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
