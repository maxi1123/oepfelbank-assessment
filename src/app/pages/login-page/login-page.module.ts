import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import LoginPageComponent from '@pages/login-page/login-page.component';

import LoginPageRoutingModule from '@pages/login-page/login-page.routing.module';
import MaterialModule from '@modules/material.module';
import SplashLogoModule from '@components/splash-logo/splash-logo.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MaterialModule,
    SplashLogoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})

/* eslint-disable */
export class LoginPageModule {}
