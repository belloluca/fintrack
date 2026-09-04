import { Component, inject, signal, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transactionApi';
import { Transaction } from '../../../models/transaction-model';
import { finalize } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-transaction-list-page',
  styleUrl: './transaction-list-page.scss',
  templateUrl: './transaction-list-page.html',
})
export class TransactionListPage implements OnInit {
  private readonly transactionService = inject(TransactionService);

  protected readonly data = signal<Transaction[]>([]);

  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  loadTransactions(): void {
    this.loading.set(true);
    this.error.set(null);

    this.transactionService
      .getTransactions()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (transactions) => this.data.set(transactions),
        error: () => this.error.set('Impossibile caricare le transazioni.'),
      });
  }

  ngOnInit(): void {
    this.loadTransactions();
  }
}
