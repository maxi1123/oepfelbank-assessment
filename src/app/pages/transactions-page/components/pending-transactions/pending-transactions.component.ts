/* eslint-disable */

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PendingTransactionI, PendingTransactionsResponseI } from '@core/services/api/interfaces';

import convertToGBP from '@utils/currency-converter';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss'],
})
export default class PendingTransactionsComponent implements OnInit {
  @Input('pendingTransactionsResponse') pendingTransactionsResponse: PendingTransactionsResponseI;

  /* eslint-enable */

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @Output() navEvent = new EventEmitter();

  public convertToGBP = convertToGBP;

  public dataSource: MatTableDataSource<PendingTransactionI>;

  public displayedColumns: string[] = ['scheduledDate', 'creditor', 'amount', 'currency'];

  public errorMessage: string;

  ngOnInit(): void {
    this.initTable();
  }

  public initTable(): void {
    this.dataSource = new MatTableDataSource(this.pendingTransactionsResponse.transactions);
  }
}
