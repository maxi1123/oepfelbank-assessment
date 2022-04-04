import { Component, Input } from '@angular/core';
import { InvestmentsResponseI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-panel',
  template: ` <mat-expansion-panel class="panel" expanded>
    <mat-expansion-panel-header>
      <mat-panel-title class="title">
        <mat-icon class="icon-display">account_balance_wallet</mat-icon>
        Account ID: {{ data.accounts[0].accountId.slice(0, 8) }}
      </mat-panel-title>
      <mat-panel-description class="description">
        Balance:
        <p class="balance">
          <strong>{{ data.accounts[0].balance }}</strong>
        </p>
        <p class="mat-caption currency">GBP</p>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <ng-content></ng-content>
  </mat-expansion-panel>`,
  styleUrls: ['./panel.component.scss'],
})
export default class PanelComponent {
  @Input() data: InvestmentsResponseI;
}
