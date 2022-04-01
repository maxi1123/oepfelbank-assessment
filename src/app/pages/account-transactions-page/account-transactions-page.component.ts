import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import SharedRenderService from '@core/services/shared-render.service';
import AccountTransactionsService from '@core/services/api/account-transactions.service';

import { TransactionsResponseI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-account-transactions-page',
  templateUrl: './account-transactions-page.component.html',
  styleUrls: ['./account-transactions-page.component.scss'],
})
export default class AccountTransactionsPageComponent implements OnInit {
  public transactionsResponse$: Observable<TransactionsResponseI>;

  constructor(
    private sharedRenderService: SharedRenderService,
    private transactionsService: AccountTransactionsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.sharedRenderService.emitChange();
    const routeParams = this.route.snapshot.paramMap;
    this.initTransactionsView(routeParams.get('id') as string);
  }

  private initTransactionsView(id: string): void {
    this.transactionsResponse$ = this.transactionsService.getAccountTransactions(id);
  }
}
