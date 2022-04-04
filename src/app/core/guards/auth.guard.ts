import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import LocalStorageService from '@core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(): boolean | Promise<boolean> {
    return this.localStorageService.loadInfo() ? true : this.router.navigate(['login']);
  }
}
