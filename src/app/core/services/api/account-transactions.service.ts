import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import LocalStorageService from '@core/services/local-storage.service';

import { PendingTransactionsResponseI, TransactionsResponseI } from '@core/services/api/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class TransactionsService {
  private authHeaders = {
    Authorization: `Bearer ${this.localStorageService.loadAccountAccessToken()}`,
  };

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  public getTransactions(id: string): Observable<TransactionsResponseI> {
    return this.http.get<TransactionsResponseI>(`http://localhost:3000/api/v1/transactions/${id}`, {
      headers: this.authHeaders,
    });
  }

  public getPendingTransactions(id: string): Observable<PendingTransactionsResponseI> {
    return this.http.get<PendingTransactionsResponseI>(
      `http://localhost:3000/api/v1/transactions/${id}/pending`,
      {
        headers: this.authHeaders,
      },
    );
  }
}
