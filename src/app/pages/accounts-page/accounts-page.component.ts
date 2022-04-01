import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import LocalStorageService from '@core/services/local-storage.service';
import SharedRenderService from '@core/services/shared-render.service';
import AuthService from '@core/auth/auth.service';
import AccountsService from '@core/services/api/accounts.service';

import { AccountsResponseI } from '@core/services/api/interfaces';

import getCurrentDate from '@utils/date';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss'],
})
export default class AccountsPageComponent implements OnInit {
  public hasAccessToken: boolean = false;

  public accountsResponse$: Observable<AccountsResponseI> | undefined;

  public dateToday: string = getCurrentDate();

  constructor(
    private localStorageService: LocalStorageService,
    private sharedRenderService: SharedRenderService,
    private auth: AuthService,
    private accountsService: AccountsService,
  ) {}

  ngOnInit(): void {
    // Emit from observable to indicate navitems change
    this.sharedRenderService.emitChange();
    this.hasAccessToken = !!this.localStorageService.loadAccountAccessToken();
    if (this.hasAccessToken) {
      this.initAccountView();
    }
  }

  public initUIFlow(): void {
    this.auth.initUIFlow();
  }

  private initAccountView() {
    this.accountsResponse$ = this.accountsService.getAccounts();
  }
}
