import { Component, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

/* eslint-disable */

@Component({
  selector: 'app-error',
  template: `<h3 class="error">{{ error.error }}</h3>`,
  styleUrls: ['./error.component.scss'],
})
export default class ErrorComponent {
  @Input('error') error: HttpErrorResponse;

  /* eslint-enable */
  constructor(private router: Router) {}

  public navigateHome(): void {
    this.router.navigate(['home', 'accounts']);
  }
}
