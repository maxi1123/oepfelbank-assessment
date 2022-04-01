import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import AuthService from '@core/auth/auth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-redirect',
  template: '',
  styles: [],
})
export default class RedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment as string)),
        map((params) => ({
          code: params.get('code'),
        })),
      )
      .subscribe((res) => {
        if (res.code) {
          this.auth.exchangeToken(res.code);
          console.log(res.code);
        }
      });
  }
}
