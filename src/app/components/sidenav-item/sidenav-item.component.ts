import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ob-sidenav-item',
  template: `
    <div class="wrapper">
      <mat-icon>login</mat-icon>
      <p class="label">{{ label }}</p>
    </div>
  `,
  styleUrls: ['./sidenav-item.component.scss'],
})
export default class SidenavItemComponent implements OnInit {
  @Input('label') label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
