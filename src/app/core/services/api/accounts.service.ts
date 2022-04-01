import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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
}