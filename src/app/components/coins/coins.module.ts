import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CoinsComponent from '@components/coins/coins.component';

@NgModule({
  declarations: [CoinsComponent],
  imports: [CommonModule],
  exports: [CoinsComponent],
})
export default class CoinsModule {}
