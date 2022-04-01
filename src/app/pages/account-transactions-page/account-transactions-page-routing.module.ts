import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AccountTransactionsPageComponent from '@pages/account-transactions-page/account-transactions-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountTransactionsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AccountTransactionsPageRoutingModule {}
