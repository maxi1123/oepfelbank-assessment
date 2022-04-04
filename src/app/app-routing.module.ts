import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import RedirectComponent from '@components/redirect/redirect.component';

import OnboardingGuard from '@core/guards/onboarding.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
    canActivate: [OnboardingGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  { path: 'redirect', component: RedirectComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
