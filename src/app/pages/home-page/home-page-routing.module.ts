import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AuthGuard from '@core/guards/auth.guard';
import OnboardingGuard from '@core/guards/onboarding.guard';

import HomePageComponent from '@pages/home-page/home-page.component';

/* eslint-disable */

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login-page/login-page.module').then((m) => m.LoginPageModule),
        canActivate: [OnboardingGuard],
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts-page/accounts-page.module').then((m) => m.AccountsPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'transactions/:id',
        loadChildren: () =>
          import('../transactions-page/transactions-page.module').then((m) => m.TransactionsPageModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class HomePageRoutingModule {}
