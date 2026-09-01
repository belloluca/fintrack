import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/TransactionListPage/TransactionListPage').then(
        (m) => m.TransactionList,
      ),
  },
  {
    path: 'transactions/new',
    loadComponent: () =>
      import('./features/transactions/TransactionFormPage/TransactionFormPage').then(
        (m) => m.TransactionForm,
      ),
  },
  {
    path: 'transactions/:id/edit',
    loadComponent: () =>
      import('./features/transactions/TransactionFormPage/TransactionFormPage').then(
        (m) => m.TransactionForm,
      ),
  },
  {
    path: 'transactions/:id',
    loadComponent: () =>
      import('./features/transactions/TransactionDetailPage/TransactionDetailPage').then(
        (m) => m.DetailPage,
      ),
  },
  {
    path: 'budgets',
    loadComponent: () => import('./features/BudgetsPage/BudgetsPage').then((m) => m.BudgetPage),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
