import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './features/home/home';
import { Dashboard } from './features/dashboard/dashboard';
import { TransactionList } from './features/transactions/TransactionListPage/TransactionListPage';
import { TransactionForm } from './features/transactions/TransactionFormPage/TransactionFormPage';
import { NotFound } from './features/not-found/not-found';
import { DetailPage } from './features/transactions/TransactionDetailPage/TransactionDetailPage';
import { BudgetPage } from './features/BudgetsPage/BudgetsPage';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('fintrack');
}
