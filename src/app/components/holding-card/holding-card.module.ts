import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HoldingCardComponent from '@components/holding-card/holding-card.component';
import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [HoldingCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HoldingCardComponent],
})
export default class HoldingCardModule {}
