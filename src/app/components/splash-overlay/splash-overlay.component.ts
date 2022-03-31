import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-overlay',
  template: ` <div class="logo-wrapper">
    <div class="splash-logo-display">
      <app-splash-logo></app-splash-logo>
    </div>
    <p class="mat-display-1 margin-top">Oepfelbank</p>
  </div>`,
  styleUrls: ['./splash-overlay.component.scss'],
})
export default class SplashOverlayComponent {}
