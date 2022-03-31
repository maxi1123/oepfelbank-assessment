import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import DashboardRoutingModule from '@pages/dashboard/dashboard-routing.module';
import DashboardComponent from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})

/* eslint-disable */
export class DashboardModule {}
