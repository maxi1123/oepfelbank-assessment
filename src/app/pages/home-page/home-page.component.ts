import { Component, OnInit } from '@angular/core';
import SharedRenderService from '@core/services/shared-render.service';
import NavItemI from '@pages/home-page/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent implements OnInit {
  public loading: boolean = true;

  public sidenavOpen: boolean = true;

  public navItemLabels: NavItemI[] = [{ label: 'Sign In', iconName: 'login' }];

  constructor(private sharedRenderService: SharedRenderService) {}

  ngOnInit(): void {
    this.sharedRenderService.changeEmitted$.subscribe(() => {
      this.navItemLabels = [
        { label: 'Accounts', iconName: 'credit_card' },
        { label: 'Transactions', iconName: 'receipt_long' },
      ];
    });
  }
}
