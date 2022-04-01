import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import AccountTransactionsPageComponent from '@pages/account-transactions-page/account-transactions-page.component';

import AccountTransactionsPageRoutingModule from '@pages/account-transactions-page/account-transactions-page-routing.module';
import TransactionsTableModule from '@pages/account-transactions-page/components/transactions-table/transactions-table.module';

@NgModule({
  declarations: [AccountTransactionsPageComponent],
  imports: [CommonModule, AccountTransactionsPageRoutingModule, TransactionsTableModule],
})

/* eslint-disable */
export class AccountTransactionsPageModule {}
