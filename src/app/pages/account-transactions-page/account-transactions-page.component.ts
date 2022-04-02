import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import SharedRenderService from '@core/services/shared-render.service';
import AccountTransactionsService from '@core/services/api/account-transactions.service';
import AccountsService from '@core/services/api/accounts.service';

import { AccountI, TransactionsResponseI } from '@core/services/api/interfaces';

import getCurrentDate from '@utils/date';

@Component({
  selector: 'app-account-transactions-page',
  templateUrl: './account-transactions-page.component.html',
  styleUrls: ['./account-transactions-page.component.scss'],
})
export default class AccountTransactionsPageComponent implements OnInit {
  public transactionsResponse$: Observable<TransactionsResponseI>;

  public selectedAccount$: Observable<AccountI>;

  public dateToday: string = getCurrentDate();

  public errorObject: any;

  constructor(
    private sharedRenderService: SharedRenderService,
    private transactionsService: AccountTransactionsService,
    private accountService: AccountsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sharedRenderService.emitChange([{ label: 'Accounts', iconName: 'credit_card', route: 'accounts' }]);
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id') as string;
    this.initSelectedAccountView(id);
    this.initTransactionsView(id);
  }

  private initTransactionsView(id: string): void {
    this.transactionsResponse$ = this.transactionsService.getAccountTransactions(id).pipe(
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
