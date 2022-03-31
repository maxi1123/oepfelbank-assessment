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
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class HomePageRoutingModule {}
