import { Component } from '@angular/core';

import NavItemI from '@pages/home-page/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent {
  public loading: boolean = true;

  public sidenavOpen: boolean = true;

  public navItems: NavItemI[] = [
    { label: 'Accounts', iconName: 'credit_card', route: 'accounts' },
    { label: 'Investments', iconName: 'show_chart', route: 'investments' },
  ];
}
