import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import SplashLogoComponent from '@components/splash-logo/splash-logo.component';

@NgModule({
  declarations: [SplashLogoComponent],
  imports: [CommonModule],
  exports: [SplashLogoComponent],
})
export default class SplashLogoModule {}
