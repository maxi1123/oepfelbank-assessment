import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import OverviewComponent from '@components/overview/overview.component';
import CoinsModule from '@components/coins/coins.module';
import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, CoinsModule, MaterialModule],
  exports: [OverviewComponent],
})
export default class OverviewModule {}
