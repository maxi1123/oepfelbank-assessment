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

  /* eslint-disable */
  public navItems: NavItemI[] = [
    {
      label: 'Accounts',
      iconName: 'credit_card',
      route: ['home', 'accounts'],
    },
    { label: 'Investments', iconName: 'show_chart', route: ['home', 'investments'] },
    { label: 'Logout', iconName: 'logout', route: ['login'], isLogout: true },
  ];
}
