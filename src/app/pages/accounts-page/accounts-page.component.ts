import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import LocalStorageService from '@core/services/local-storage.service';

import AuthService from '@core/auth/auth.service';
import AccountsService from '@core/services/api/accounts.service';

import { AccountsResponseI } from '@core/services/api/interfaces';
import LocalUserI from '@core/services/interfaces';

import getCurrentDate from '@utils/date';
import convertToGBP from '@utils/currency-converter';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss'],
})
export default class AccountsPageComponent implements OnInit {
  public hasAccessToken: boolean = false;

  public accountsResponse$: Observable<AccountsResponseI>;

  public dateToday: string = getCurrentDate();

  public user: LocalUserI = this.getName();

  public convertToGBP = convertToGBP;

  constructor(
    private localStorageService: LocalStorageService,
    private auth: AuthService,
    private accountsService: AccountsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Emit from observable to indicate navitems change
    this.hasAccessToken = !!this.localStorageService.loadAccountAccessToken();
    if (this.hasAccessToken) {
      this.initAccountView();
    }
  }

  public initUIFlow(): void {
    this.auth.initUIFlow();
  }

  private initAccountView(): void {
    this.accountsResponse$ = this.accountsService.getAccounts();
  }

  public navigate(id: string): void {
    this.router.navigate([`home/transactions/${id}`]);
  }

  public getName(): LocalUserI {
    return this.localStorageService.loadInfo();
  }
}
