import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import * as Endpoints from '@core/constants/endpoints';
import LocalStorageService from '@core/services/local-storage.service';

import { AccountsResponseI } from '@core/services/api/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class AccountsService {
  private authHeaders = {
    Authorization: `Bearer ${this.localStorageService.loadAccountAccessToken()}`,
  };

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  public getAccounts(): Observable<AccountsResponseI> {
    return this.http.get<AccountsResponseI>('http://localhost:3000/api/v1/accounts', {
      headers: this.authHeaders,
    });
  }

  public getBalances(accountId: string): Observable<any> {
    return this.http.get(
      `${Endpoints.BASE_API_ENDPOINT}/open-banking/v3.1/aisp/accounts/${accountId}/balances`,
      {
        headers: this.authHeaders,
      },
    );
  }
}
