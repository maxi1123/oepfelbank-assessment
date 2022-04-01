/* eslint-disable */

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TransactionI, TransactionsResponseI } from '@core/services/api/interfaces';
import { takeUntil } from 'rxjs/operators';

/* eslint-enable */

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export default class TransactionsTableComponent implements OnInit, OnDestroy {
  // Alias for observable naming convention -> allow eslint exception
  /* eslint-disable */
  @Input('transactionsResponse') transactionsResponse$: Observable<TransactionsResponseI>;
  /* eslint-enable */
  @ViewChild(MatSort) sort: MatSort;
  @Output() navEvent = new EventEmitter();

  public dataSource: MatTableDataSource<TransactionI>;
  public displayedColumns: string[] = ['bookingDate', 'status', 'transactionInfo', 'amount', 'currency'];
  private d$ = new Subject();
  public errorMessage: string;

  ngOnInit(): void {
    this.initTable();
  }

  ngOnDestroy(): void {
    this.d$.next();
    this.d$.complete();
  }

  public initTable(): void {
    this.transactionsResponse$.pipe(takeUntil(this.d$)).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.transactions);
        this.dataSource.sort = this.sort;
      },
      error: (e: HttpErrorResponse) => {
        this.errorMessage = e.error;
      },
    });
  }

  public triggerNav(): void {
    this.navEvent.emit();
  }
}

// {
// this.dataSource = new MatTableDataSource((res as TransactionsResponseI).transactions);
// this.dataSource.sort = this.sort;
// }
