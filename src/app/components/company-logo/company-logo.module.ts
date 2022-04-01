import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CompanyLogoComponent from '@components/company-logo/company-logo.component';

@NgModule({
  declarations: [CompanyLogoComponent],
  imports: [CommonModule],
  exports: [CompanyLogoComponent],
})
export default class CompanyLogoModule {}
