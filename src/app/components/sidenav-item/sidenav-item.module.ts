import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from '@modules/material.module';

import SidenavItemComponent from '@components/sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidenavItemComponent],
})
export default class SidenavItemModule {}
