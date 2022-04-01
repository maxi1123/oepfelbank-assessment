import { Component, Input } from '@angular/core';

import { AccountI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export default class AccountCardComponent {
  @Input() accountData: AccountI;
}
