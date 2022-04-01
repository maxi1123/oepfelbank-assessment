import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import LocalStorageService from '@core/services/local-storage.service';

import { TransactionsResponseI } from '@core/services/api/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class AccountTransactionsService {
  private authHeaders = {
    Authorization: `Bearer ${this.localStorageService.loadAccountAccessToken()}`,
  };

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  public getAccountTransactions(id: string): Observable<TransactionsResponseI> {
    console.log(id);
    return this.http.get<TransactionsResponseI>(`http://localhost:3000/api/v1/transactions/${id}`);
  }
}
