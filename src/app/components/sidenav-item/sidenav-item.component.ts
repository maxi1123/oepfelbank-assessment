import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  template: `
    <div class="wrapper">
      <mat-icon>login</mat-icon>
      <p class="label">{{ label }}</p>
    </div>
  `,
  styleUrls: ['./sidenav-item.component.scss'],
})
export default class SidenavItemComponent {
  @Input() label: string = '';
}
