import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment as string)),
        map((params) => ({
          code: params.get('code'),
        })),
        takeUntil(this.d$),
      )
      .subscribe((res) => {
        if (res.code) {
          this.auth.exchangeToken(res.code);
        }
      });
  }

  ngOnDestroy(): void {
    this.d$.next();
    this.d$.complete();
  }
}
