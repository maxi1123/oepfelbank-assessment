import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import LoginPageComponent from '@pages/login-page/login-page.component';

import MaterialModule from '@modules/material.module';
import LoginPageRoutingModule from './login-page.routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule, MaterialModule],
})

/* eslint-disable */
export class LoginPageModule {}
