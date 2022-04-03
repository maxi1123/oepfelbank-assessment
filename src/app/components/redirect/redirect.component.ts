import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import AuthService from '@core/auth/auth.service';

@Component({
  selector: 'app-redirect',
  template: '',
  styles: [],
})
export default class RedirectComponent implements OnInit, OnDestroy {
  private d$ = new Subject();

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment as string)),
        map((params) => {
          if (params.get('code')) {
            return { code: params.get('code') };
          }
          this.router.navigate(['home', 'accounts']);
          return null;
        }),
        takeUntil(this.d$),
      )
      .subscribe((res) => {
        if (res?.code) {
          this.auth.exchangeToken(res.code);
        }
      });
  }

  ngOnDestroy(): void {
    this.d$.next();
    this.d$.complete();
  }
}
