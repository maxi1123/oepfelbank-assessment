import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import LocalStorageService from '@core/services/local-storage.service';

import * as Endpoints from '@core/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private CLIENT_ID = 'eNrGKyGMeoXFhzZQNvw7yaqP-hVPVzBeQ5MgkJs0odw=';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  public async initUIFlow(): Promise<void> {
    const consentId = await this.http.get('http://localhost:3000/api/v1/auth').toPromise<any>();
    window.location.href = `${Endpoints.AUTHORIZE_ENDPOINT}?client_id=${this.CLIENT_ID}&response_type=code id_token&scope=openid accounts&redirect_uri=${Endpoints.REDIRECT_URI}&state=ABC&request=${consentId}`;
  }

  public async exchangeToken(code: string): Promise<void> {
    const accessToken = await this.http
      .get(`http://localhost:3000/api/v1/auth/token/${code}`)
      .toPromise<any>();
    this.localStorageService.setAccountAccessToken(accessToken);
    this.router.navigate(['home', 'accounts']);
  }
}
