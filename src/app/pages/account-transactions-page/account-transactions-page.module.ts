import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import AccountTransactionsPageComponent from '@pages/account-transactions-page/account-transactions-page.component';

import AccountTransactionsPageRoutingModule from '@pages/account-transactions-page/account-transactions-page-routing.module';
import TransactionsTableModule from '@pages/account-transactions-page/components/transactions-table/transactions-table.module';
import CoinsModule from '@components/coins/coins.module';
import AccountCardModule from '@components/account-card/account-card.module';
import MaterialModule from '@modules/material.module';

import ErrorComponent from '@pages/account-transactions-page/components/error/error.component';

@NgModule({
  declarations: [AccountTransactionsPageComponent, ErrorComponent],
  imports: [
    CommonModule,
    AccountTransactionsPageRoutingModule,
    TransactionsTableModule,
    CoinsModule,
    AccountCardModule,
    MaterialModule,
  ],
})

/* eslint-disable */
export class AccountTransactionsPageModule {}
