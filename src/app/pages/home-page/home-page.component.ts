import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import SharedRenderService from '@core/services/shared-render.service';
import NavItemI from '@pages/home-page/interfaces';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent implements OnInit, OnDestroy {
  public loading: boolean = true;

  public sidenavOpen: boolean = true;

  public navItemLabels: NavItemI[] = [{ label: 'Sign In', iconName: 'login', route: 'login' }];

  private d$ = new Subject();

  constructor(private sharedRenderService: SharedRenderService) {}

  ngOnDestroy(): void {
    this.d$.next();
    this.d$.complete();
  }

  ngOnInit(): void {
    this.sharedRenderService.changeEmitted$.pipe(takeUntil(this.d$)).subscribe(() => {
      this.navItemLabels = [
        { label: 'Accounts', iconName: 'credit_card', route: 'accounts' },
        { label: 'Transactions', iconName: 'receipt_long', route: 'transactions' },
      ];
    });
  }
}
