import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from '@modules/material.module';
import AccountCardModule from '@components/account-card/account-card.module';
import AccountsRoutingModule from '@pages/accounts-page/accounts-routing.module';
import AccountsPageComponent from '@pages/accounts-page/accounts-page.component';

@NgModule({
  declarations: [AccountsPageComponent],
  imports: [CommonModule, MaterialModule, AccountsRoutingModule, AccountCardModule],
})

/* eslint-disable */
export class AccountsPageModule {}
