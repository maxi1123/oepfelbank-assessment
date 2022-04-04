import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { InvestmentsResponseI } from '@core/services/api/interfaces';
import LocalUserI from '@core/services/interfaces';

import InvestmentsService from '@core/services/api/investments.service';
import LocalStorageService from '@core/services/local-storage.service';
import AuthService from '@core/auth/auth.service';

@Component({
  selector: 'app-investments-page',
  templateUrl: './investments-page.component.html',
  styleUrls: ['./investments-page.component.scss'],
})
export default class InvestmentsPageComponent implements OnInit {
  public hasAccessToken: boolean = false;

  public investments$: Observable<InvestmentsResponseI>;

  public user: LocalUserI = this.getName();

  constructor(
    private localStorageService: LocalStorageService,
    private auth: AuthService,
    private investments: InvestmentsService,
  ) {}

  ngOnInit(): void {
    this.hasAccessToken = !!this.localStorageService.loadAccountAccessToken();
    if (this.hasAccessToken) {
      this.initInvestmentsView();
    }
  }

  public initUIFlow(): void {
    this.auth.initUIFlow();
  }

  private initInvestmentsView(): void {
    this.investments$ = this.investments.getInvestmentAccounts();
  }

  public getName(): LocalUserI {
    return this.localStorageService.loadInfo();
  }
}
