import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import HomePageComponent from '@pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login-page/login-page.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts-page/accounts-page.module').then((m) => m.AccountsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class HomePageRoutingModule {}
