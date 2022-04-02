import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sharedRenderService.emitChange([
      { label: 'Accounts', iconName: 'credit_card', route: 'accounts' },
      { label: 'Transactions', iconName: 'receipt_long', route: 'transactions' },
    ]);
    const routeParams = this.route.snapshot.paramMap;
    this.initTransactionsView(routeParams.get('id') as string);
  }

  private initTransactionsView(id: string): void {
    this.transactionsResponse$ = this.transactionsService.getAccountTransactions(id);
  }

  public navigateHome(): void {
    this.router.navigate(['home', 'accounts']);
  }
}
