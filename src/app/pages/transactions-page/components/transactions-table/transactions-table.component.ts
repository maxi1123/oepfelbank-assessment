/* eslint-disable */

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TransactionI, TransactionsResponseI } from '@core/services/api/interfaces';

import convertToGBP from '@utils/currency-converter';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export default class TransactionsTableComponent implements OnInit {
  @Input('transactionsResponse') transactionsResponse: TransactionsResponseI;

  /* eslint-enable */

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @Output() navEvent = new EventEmitter();

  public convertToGBP = convertToGBP;

  public dataSource: MatTableDataSource<TransactionI>;

  public displayedColumns: string[] = ['bookingDate', 'status', 'transactionInfo', 'amount', 'currency'];

  public errorMessage: string;

  ngOnInit(): void {
    this.initTable();
  }

  public initTable(): void {
    this.dataSource = new MatTableDataSource(this.transactionsResponse.transactions);
  }

  public triggerNav(): void {
    this.navEvent.emit();
  }
}
