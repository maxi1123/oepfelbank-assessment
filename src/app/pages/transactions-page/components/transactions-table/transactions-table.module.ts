import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import TransactionsTableComponent from '@pages/transactions-page/components/transactions-table/transactions-table.component';

import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [TransactionsTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TransactionsTableComponent],
})
export default class TransactionsTableModule {}
