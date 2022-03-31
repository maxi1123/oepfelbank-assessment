import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import SplashLogoModule from '@components/splash-logo/splash-logo.module';
import SplashOverlayComponent from './splash-overlay.component';

@NgModule({
  declarations: [SplashOverlayComponent],
  imports: [CommonModule, SplashLogoModule],
  exports: [SplashOverlayComponent],
})
export default class SplashOverlayModule {}
