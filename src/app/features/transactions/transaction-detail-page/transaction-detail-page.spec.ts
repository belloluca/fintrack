import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionDetailPage } from './transaction-detail-page';

describe('TransactionDetailPage', () => {
  let component: TransactionDetailPage;
  let fixture: ComponentFixture<TransactionDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
