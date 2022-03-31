import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import LoginPageComponent from '@pages/login-page/login-page.component';

import LoginPageRoutingModule from './login-page.routing.module';
import MaterialModule from '@modules/material.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule, MaterialModule],
})
export class LoginPageModule {}
