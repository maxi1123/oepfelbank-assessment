import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from '@modules/material.module';

import SplashLogoModule from '@components/splash-logo/splash-logo.module';
import SidenavItemModule from '@components/sidenav-item/sidenav-item.module';
import HomePageRoutingModule from './home-page-routing.module';
import HomePageComponent from './home-page.component';

/* eslint-disable */

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, MaterialModule, SplashLogoModule, SidenavItemModule],
})
export class HomePageModule {}
