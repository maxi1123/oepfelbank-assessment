import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import NavItemI from '@pages/home-page/interfaces';

@Injectable({
  providedIn: 'root',
})
export default class SharedRenderService {
  private emitChangeSource = new Subject<NavItemI[]>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(navItems: NavItemI[]) {
    this.emitChangeSource.next(navItems);
  }
}
