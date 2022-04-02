import { Component, Input } from '@angular/core';

import { AccountI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-account-card',
  template: `
    <div [ngClass]="isTransactionView ? 'card no-margin no-hover' : 'card'">
      <div class="logo-wrapper">
        <app-company-logo></app-company-logo>
      </div>
      <h4>
        {{ accountData.accountSubType }}
      </h4>
      <div style="display: flex; align-items: center">
        <h2 [ngClass]="accountData.balance < 0 ? 'alert-negative' : ''">{{ accountData.balance }}</h2>
        <h4 class="currency">{{ accountData.currency }}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./account-card.component.scss'],
})
export default class AccountCardComponent {
  @Input() accountData: AccountI;

  @Input() isTransactionView: boolean;
}
