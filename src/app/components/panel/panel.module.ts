import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import PanelComponent from '@components/panel/panel.component';
import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PanelComponent],
})
export default class PanelModule {}
