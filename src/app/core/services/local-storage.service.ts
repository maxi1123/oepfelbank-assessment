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

  /* eslint-disable */

  setInfo(data: LocalUserI): void {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem('user', jsonData);
  }

  loadInfo(): LocalUserI {
    const data = JSON.parse(sessionStorage.getItem('user') as string);
    return data;
  }

  removeUser(): void {
    sessionStorage.removeItem('user');
  }

  setAccountAccessToken(token: string): void {
    this.localStorage.setItem('access_token', token);
  }

  loadAccountAccessToken(): string | null {
    return this.localStorage.getItem('access_token');
  }
}
