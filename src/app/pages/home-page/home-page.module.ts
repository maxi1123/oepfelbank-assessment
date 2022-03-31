import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HomePageComponent from './home-page.component';

import HomePageRoutingModule from './home-page-routing.module';
import MaterialModule from '@modules/material.module';

import SplashLogoModule from '@components/splash-logo/splash-logo.module';
import SidenavItemModule from '@components/sidenav-item/sidenav-item.module';
import { SplashOverlayModule } from '@components/splash-overlay/splash-overlay.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MaterialModule,
    SplashLogoModule,
    SidenavItemModule,
    SplashOverlayModule,
  ],
})
export class HomePageModule {}
