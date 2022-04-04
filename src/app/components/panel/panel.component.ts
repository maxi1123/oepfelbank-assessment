import { Component, Input } from '@angular/core';
import { InvestmentAccountI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-panel',
  template: ` <mat-expansion-panel class="panel">
    <mat-expansion-panel-header matTooltip="Click to expand / hide" matTooltipPosition="before">
      <mat-panel-title class="title">
        <mat-icon class="icon-display">account_balance_wallet</mat-icon>
        Account ID: {{ data.accountId.slice(0, 8) }}
      </mat-panel-title>
      <mat-panel-description class="description">
        <mat-icon class="icon-display">balance</mat-icon>
        Balance:
        <p class="balance">
          <strong [ngClass]="data.balance < 0 ? 'alert-down' : 'alert-up'">{{ data.balance }}</strong>
        </p>
        <p class="mat-caption currency">GBP</p>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <ng-content></ng-content>
  </mat-expansion-panel>`,
  styleUrls: ['./panel.component.scss'],
})
export default class PanelComponent {
  @Input() data: InvestmentAccountI;
}
