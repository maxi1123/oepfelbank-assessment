import { Component, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  template: ` <h3 class="error">{{ error.error }}</h3>
    <button mat-fab color="primary" class="back-button" (click)="navigateHome()">
      <mat-icon>arrow_back</mat-icon>
    </button>`,
  styleUrls: ['./error.component.scss'],
})
export default class ErrorComponent {
  /* eslint-disable */
  @Input('error') error: HttpErrorResponse;

  /* eslint-enable */
  constructor(private router: Router) {}

  public navigateHome(): void {
    this.router.navigate(['home', 'accounts']);
  }
}
