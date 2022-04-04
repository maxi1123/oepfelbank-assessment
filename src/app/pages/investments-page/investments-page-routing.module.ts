import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import InvestmentsPageComponent from './investments-page.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class InvestmentsPageRoutingModule {}
