import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((m) => m.HomePage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard-page').then((m) => m.DashboardPage),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transaction-list-page/transaction-list-page').then(
        (m) => m.TransactionListPage,
      ),
  },
  {
    path: 'transactions/new',
    loadComponent: () =>
      import('./features/transactions/transaction-form-page/transaction-form-page').then(
        (m) => m.TransactionFormPage,
      ),
  },
  {
    path: 'transactions/:id/edit',
    loadComponent: () =>
      import('./features/transactions/transaction-form-page/transaction-form-page').then(
        (m) => m.TransactionFormPage,
      ),
  },
  {
    path: 'transactions/:id',
    loadComponent: () =>
      import('./features/transactions/transaction-detail-page/transaction-detail-page').then(
        (m) => m.TransactionDetailPage,
      ),
  },
  {
    path: 'budgets',
    loadComponent: () => import('./features/budgets/budgets-page').then((m) => m.BudgetsPage),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
