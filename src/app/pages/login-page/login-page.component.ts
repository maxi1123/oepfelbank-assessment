import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import LocalStorageService from '@core/services/local-storage.service';
import SharedRenderService from '@core/services/shared-render.service';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="wrapper">
      <div class="text-wrapper">
        <h1 class="title">Welcome to Oepfelbank</h1>
        <h4 class="subtitle">Banking made simple</h4>
      </div>
      <button mat-flat-button color="primary" (click)="mockAuth()">Sign In</button>
    </div>
  `,
  styleUrls: ['./login-page.component.scss'],
})
export default class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private sharedRender: SharedRenderService,
  ) {}

  ngOnInit(): void {
    this.sharedRender.emitChange([{ label: 'Sign In', iconName: 'login', route: 'login' }]);
  }

  public mockAuth(): void {
    this.localStorageService.setInfo({ name: 'Max' });
    this.router.navigate(['home/accounts']);
  }
}
