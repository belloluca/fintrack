import { Transaction } from './transaction-model';

export type UpdateTransactionRequest = Omit<Transaction, 'id' | 'updatedAt' | 'createdAt'>;

export type CreateTransactionRequest = Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>;
