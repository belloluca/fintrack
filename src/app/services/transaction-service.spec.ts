import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import type { Transaction } from '../models/transaction-model';
import { TransactionService } from './transactionApi';

describe('TransactionService', () => {
  let service: TransactionService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(TransactionService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should retrieve all transactions', () => {
    const mockTransactions: Transaction[] = [
      {
        id: 1,
        description: 'Stipendio',
        amount: 1800,
        type: 'INCOME',
        categoryId: 1,
        date: '2026-09-01',
        createdAt: '2026-09-01T08:00:00.000Z',
        updatedAt: '2026-09-01T08:00:00.000Z',
      },
    ];

    service.getTransactions().subscribe((transactions) => {
      expect(transactions).toEqual(mockTransactions);
    });

    const request = httpTesting.expectOne('/api/transactions');

    expect(request.request.method).toBe('GET');

    request.flush(mockTransactions);
  });
});
