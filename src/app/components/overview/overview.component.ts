import { Component, Input } from '@angular/core';

import getCurrentDate from '@utils/date';

@Component({
  selector: 'app-overview',
  template: `
    <div class="overview-wrapper">
      <mat-icon class="icon-display">{{ icon }}</mat-icon>
      <h1 class="mat-display-1 total" [ngClass]="total < 0 ? 'alert-negative' : ''">
        {{ total !== 0 ? total : '--.--' }}
      </h1>
      <h4 class="currency">
        {{ total !== 0 ? currency : '' }}
      </h4>
    </div>
    <h4 class="date">Valuta: {{ dateToday }}</h4>
  `,
  styleUrls: ['./overview.component.scss'],
})
export default class OverviewComponent {
  @Input() total: number;

  @Input() currency: string | undefined;

  @Input() icon: string;

  public dateToday: string = getCurrentDate();
}
