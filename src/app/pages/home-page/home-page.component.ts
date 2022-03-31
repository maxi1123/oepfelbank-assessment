import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent implements OnInit {
  public loading: boolean = true;

  public sidenavOpen: boolean = true;

  public navItemLabels: string[] = ['Login'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['home/login']);
    }, 2000);
  }
}
