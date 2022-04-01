import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CompanyLogoModule from '@components/company-logo/company-logo.module';

import AccountCardComponent from '@components/account-card/account-card.component';

@NgModule({
  declarations: [AccountCardComponent],
  imports: [CommonModule, CompanyLogoModule],
  exports: [AccountCardComponent],
})
export default class AccountCardModule {}
