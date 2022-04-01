import { Injectable } from '@angular/core';

import LocalStorageRefService from '@core/services/local-storage-ref.service';

import LocalUserI from '@core/services/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class LocalStorageService {
  private localStorage: Storage;

  constructor(private localStorageRefService: LocalStorageRefService) {
    this.localStorage = localStorageRefService.localStorage;
  }

  setInfo(data: LocalUserI) {
    const jsonData = JSON.stringify(data);
    this.localStorage.setItem('user', jsonData);
  }

  loadInfo(): LocalUserI {
    const data = JSON.parse(this.localStorage.getItem('user') as string);
    return data;
  }

  setRefreshToken(token: string): void {
    this.localStorage.setItem('refresh _token', token);
  }

  setAccountAccessToken(token: string): void {
    this.localStorage.setItem('access_token', token);
  }

  loadAccountAccessToken(): string | null {
    return this.localStorage.getItem('access_token');
  }
}
