import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent implements OnInit {
  public loading: boolean = true;
  public sidenavOpen: boolean = true;

  public navItemLabels: string[] = ['Login'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.loading = false), 3000);
  }
}
