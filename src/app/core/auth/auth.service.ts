import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as Endpoints from '@core/constants/endpoints';
import LocalStorageService from '@core/services/local-storage.service';

import environment from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private CLIENT_ID = (environment as any).NATWEST_CLIENT_ID;

  private CLIENT_SECRET = (environment as any).NATWEST_CLIENT_SECRET;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  public async initUIFlow(): Promise<void> {
    const formHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', `${this.CLIENT_ID}`);
    body.set('client_secret', `${this.CLIENT_SECRET}`);
    body.set('scope', 'accounts');

    const requestToken = await this.http
      .post(`${Endpoints.TOKEN_ENDPOINT}`, body.toString(), { headers: formHeaders })
      .toPromise<any>();

    const authHeaders = {
      Authorization: `Bearer ${requestToken.access_token}`,
    };

    const authBody = {
      Data: {
        Permissions: [
          'ReadAccountsDetail',
          'ReadBalances',
          'ReadTransactionsCredits',
          'ReadTransactionsDebits',
          'ReadTransactionsDetail',
        ],
      },
      Risk: {},
    };

    const res = await this.http
      .post(`${Endpoints.BASE_API_ENDPOINT}/open-banking/v3.1/aisp/account-access-consents`, authBody, {
        headers: authHeaders,
      })
      .toPromise<any>();
    window.location.href = `${Endpoints.AUTHORIZE_ENDPOINT}?client_id=${this.CLIENT_ID}&response_type=code id_token&scope=openid accounts&redirect_uri=${Endpoints.REDIRECT_URI}&state=ABC&request=${res.Data.ConsentId}`;
  }

  public async exchangeToken(code: string): Promise<void> {
    const formHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', this.CLIENT_ID);
    body.set('client_secret', this.CLIENT_SECRET);
    body.set('code', code);
    body.set('redirect_uri', Endpoints.REDIRECT_URI);

    const res = await this.http
      .post(`${Endpoints.TOKEN_ENDPOINT}`, body.toString(), { headers: formHeaders })
      .toPromise<any>();
    console.log(res);

    this.localStorageService.setRefreshToken(res.refresh_token);
    this.localStorageService.setAccountAccessToken(res.access_token);
    this.router.navigate(['home', 'accounts']);
  }
}
