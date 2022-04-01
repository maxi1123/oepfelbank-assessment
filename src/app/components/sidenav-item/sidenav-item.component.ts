import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-item',
  template: `
    <div class="wrapper" (click)="navigate()">
      <mat-icon>{{ iconName }}</mat-icon>
      <p class="label">{{ label }}</p>
    </div>
  `,
  styleUrls: ['./sidenav-item.component.scss'],
})
export default class SidenavItemComponent {
  @Input() iconName: string;

  @Input() label: string;

  @Input() route: string;

  constructor(private router: Router) {}

  public navigate(): void {
    this.router.navigate(['home', this.route]);
  }
}
