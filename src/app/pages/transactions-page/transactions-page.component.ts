import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import AccountTransactionsService from '@core/services/api/account-transactions.service';
import AccountsService from '@core/services/api/accounts.service';

import { AccountI, PendingTransactionsResponseI, TransactionsResponseI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
})
export default class TransactionsPageComponent implements OnInit {
  public transactionsResponse$: Observable<TransactionsResponseI>;

  public pendingTransactionsResponse$: Observable<PendingTransactionsResponseI>;

  public selectedAccount$: Observable<AccountI>;

  public errorObject: any;

  constructor(
    private transactionsService: AccountTransactionsService,
    private accountService: AccountsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id') as string;
    this.initSelectedAccountView(id);
    this.initTransactionsView(id);
    this.initPendingTransactionsView(id);
  }

  private initTransactionsView(id: string): void {
    this.transactionsResponse$ = this.transactionsService.getTransactions(id).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorObject = err;
        return throwError(err);
      }),
    );
  }

  private initPendingTransactionsView(id: string) {
    this.pendingTransactionsResponse$ = this.transactionsService.getPendingTransactions(id).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorObject = err;
        return throwError(err);
      }),
    );
  }

  private initSelectedAccountView(id: string): void {
    this.selectedAccount$ = this.accountService.getAccountInfo(id);
  }

  public navigateHome(): void {
    this.router.navigate(['home', 'accounts']);
  }
}
