import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import ErrorComponent from '@components/error/error.component';

import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ErrorComponent],
})
export default class ErrorModule {}
