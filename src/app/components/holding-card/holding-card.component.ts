import { Component, Input } from '@angular/core';
import { HoldingI } from '@core/services/api/interfaces';

@Component({
  selector: 'app-holding-card',
  template: ` <div class="holding">
    <div class="card-header"></div>
    <div class="card-body">
      <h2 class="holding-name">
        <strong>{{ holding.stock.name }}</strong>
      </h2>
      <div class="body-header">
        <mat-icon class="icon-display green">assessment</mat-icon>
        <h2>
          {{ (holding.owned * holding.stock.closingPrice).toFixed(2) }}
          <p style="display: inline-block;" class="mat-caption">GBP</p>
        </h2>
      </div>
      <h4 class="data-point">
        Ticker: <strong>{{ holding.stock.symbol }}</strong>
      </h4>
      <h4 class="data-point">
        Owned: <strong>{{ holding.owned }}</strong>
      </h4>
      <h4 class="data-point">
        Closing:
        <strong
          >{{ holding.stock.closingPrice.toFixed(2) }}
          <p style="display: inline-block;" class="mat-caption">GBP</p></strong
        >
      </h4>
    </div>
  </div>`,
  styleUrls: ['./holding-card.component.scss'],
})
export default class HoldingCardComponent {
  @Input() holding: HoldingI;
}
