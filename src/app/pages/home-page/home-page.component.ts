import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import SharedRenderService from '@core/services/shared-render.service';
import NavItemI from '@pages/home-page/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent {
  public loading: boolean = true;

  public sidenavOpen: boolean = true;

  public navItems$: Observable<NavItemI[]> = this.sharedRenderService.changeEmitted$;

  constructor(private sharedRenderService: SharedRenderService) {}
}
