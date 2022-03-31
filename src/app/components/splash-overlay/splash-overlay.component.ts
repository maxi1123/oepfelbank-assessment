import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ob-splash-overlay',
  template: ` <div class="logo-wrapper">
    <div class="splash-logo-display">
      <ob-splash-logo></ob-splash-logo>
    </div>
    <p class="mat-display-1 margin-top">Oepfelbank</p>
  </div>`,
  styleUrls: ['./splash-overlay.component.scss'],
})
export default class SplashOverlayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
