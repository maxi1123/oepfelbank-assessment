import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import TransactionsPageComponent from '@pages/transactions-page/transactions-page.component';

import TransactionsPageRoutingModule from '@pages/transactions-page/transactions-page-routing.module';
import TransactionsTableModule from '@pages/transactions-page/components/transactions-table/transactions-table.module';
import CoinsModule from '@components/coins/coins.module';
import AccountCardModule from '@components/account-card/account-card.module';
import MaterialModule from '@modules/material.module';

import PendingTransactionsModule from '@pages/transactions-page/components/pending-transactions/pending-transactions.module';
import OverviewModule from '@components/overview/overview.module';
import ErrorModule from '@components/error/error.module';

@NgModule({
  declarations: [TransactionsPageComponent],
  imports: [
    CommonModule,
    TransactionsPageRoutingModule,
    TransactionsTableModule,
    PendingTransactionsModule,
    CoinsModule,
    AccountCardModule,
    MaterialModule,
    OverviewModule,
    ErrorModule,
  ],
})

/* eslint-disable */
export class TransactionsPageModule {}
