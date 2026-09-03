import { Service, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class TransactionService {
  private readonly http = Inject(HttpClient);
}
