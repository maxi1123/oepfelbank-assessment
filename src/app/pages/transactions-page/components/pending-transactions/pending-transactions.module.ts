import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from '@modules/material.module';

import PendingTransactionsComponent from '@pages/transactions-page/components/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [PendingTransactionsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PendingTransactionsComponent],
})
export default class PendingTransactionsModule {}
