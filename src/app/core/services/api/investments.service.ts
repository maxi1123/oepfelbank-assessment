import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import LocalStorageService from '@core/services/local-storage.service';

import { InvestmentsResponseI } from '@core/services/api/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class InvestmentsService {
  private authHeaders = {
    Authorization: `Bearer ${this.localStorageService.loadAccountAccessToken()}`,
  };

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  /* eslint-disable */
  public getInvestmentAccounts(): Observable<InvestmentsResponseI> {
    return this.http.get<InvestmentsResponseI>(`http://localhost:3000/api/v1/investments`, {
      headers: this.authHeaders,
    });
  }
}
