import { TestBed } from '@angular/core/testing';
import { TransactionList } from './features/transactions/TransactionListPage/TransactionListPage';

describe('TransactionList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionList],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TransactionList);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
