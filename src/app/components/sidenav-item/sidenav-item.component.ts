import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import LocalStorageService from '@core/services/local-storage.service';

@Component({
  selector: 'app-sidenav-item',
  template: `
    <div class="wrapper" (click)="navigate(route)">
      <mat-icon>{{ iconName }}</mat-icon>
      <p class="label">{{ label }}</p>
    </div>
  `,
  styleUrls: ['./sidenav-item.component.scss'],
})
export default class SidenavItemComponent {
  @Input() iconName: string;

  @Input() label: string;

  @Input() route: string[];

  @Input() isLogout: boolean;

  constructor(private router: Router, private localStorage: LocalStorageService) {}

  public navigate(route: string[]): void {
    if (this.isLogout) {
      this.localStorage.removeUser();
    }
    this.router.navigate(route);
  }
}
