/* eslint-disable */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/* eslint-enable */

import { AccountI } from '@core/services/api/interfaces';

import convertToGBP from '@utils/currency-converter';

@Component({
  selector: 'app-account-card',
  template: `
    <div (click)="triggerNav()" [ngClass]="isTransactionView ? 'card no-margin no-hover' : 'card'">
      <div class="top-bar"></div>
      <div class="body-wrapper">
        <div class="logo-wrapper">
          <app-company-logo></app-company-logo>
        </div>
        <h4>
          {{ accountData.accountSubType }}
        </h4>
        <div style="display: flex; align-items: center">
          <h2 [ngClass]="accountData.balance < 0 ? 'alert-negative' : ''">
            {{ convertToGBP(accountData.balance) }}
          </h2>
          <h4 class="currency">{{ accountData.currency }}</h4>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./account-card.component.scss'],
})
export default class AccountCardComponent {
  @Input() accountData: AccountI;

  @Input() isTransactionView: boolean;

  @Output() navEvent = new EventEmitter();

  public convertToGBP = convertToGBP;

  public triggerNav(): void {
    this.navEvent.emit();
  }
}
