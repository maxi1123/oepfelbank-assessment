import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import DashboardComponent from './dashboard.component';

import DashboardRoutingModule from '@pages/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
