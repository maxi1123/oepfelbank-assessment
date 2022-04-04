import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from '@modules/material.module';

import InvestmentsPageComponent from '@pages/investments-page/investments-page.component';
import InvestmentsPageRoutingModule from '@pages/investments-page/investments-page-routing.module';
import OverviewModule from '@components/overview/overview.module';
import PanelModule from '@components/panel/panel.module';
import HoldingCardModule from '@components/holding-card/holding-card.module';

@NgModule({
  declarations: [InvestmentsPageComponent],
  imports: [
    CommonModule,
    InvestmentsPageRoutingModule,
    MaterialModule,
    OverviewModule,
    PanelModule,
    HoldingCardModule,
  ],
  exports: [InvestmentsPageComponent],
})

/* eslint-disable */
export class InvestmentsPageModule {}
