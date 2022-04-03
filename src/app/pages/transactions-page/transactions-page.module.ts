import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import TransactionsPageComponent from '@pages/transactions-page/transactions-page.component';

import TransactionsPageRoutingModule from '@pages/transactions-page/transactions-page-routing.module';
import TransactionsTableModule from '@pages/transactions-page/components/transactions-table/transactions-table.module';
import CoinsModule from '@components/coins/coins.module';
import AccountCardModule from '@components/account-card/account-card.module';
import MaterialModule from '@modules/material.module';

import ErrorComponent from '@pages/transactions-page/components/error/error.component';
import PendingTransactionsModule from '@pages/transactions-page/components/pending-transactions/pending-transactions.module';

@NgModule({
  declarations: [TransactionsPageComponent, ErrorComponent],
  imports: [
    CommonModule,
    TransactionsPageRoutingModule,
    TransactionsTableModule,
    PendingTransactionsModule,
    CoinsModule,
    AccountCardModule,
    MaterialModule,
  ],
})

/* eslint-disable */
export class TransactionsPageModule {}
