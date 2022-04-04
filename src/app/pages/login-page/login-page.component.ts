import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import LocalStorageService from '@core/services/local-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export default class LoginPageComponent implements OnInit {
  public showStepper: boolean = false;

  public showFakeSplash: boolean = true;

  public firstFormGroup: FormGroup;

  public secondFormGroup: FormGroup;

  public thirdFormGroup: FormGroup;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showFakeSplash = false;
    }, 2500);
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  public toggleStepper(): void {
    this.showStepper = true;
  }

  public mockAuth(): void {
    this.localStorageService.setInfo({
      lastName: this.firstFormGroup.value.firstCtrl as string,
      firstName: this.secondFormGroup.value.secondCtrl as string,
      username: this.thirdFormGroup.value.thirdCtrl as string,
    });
    this.router.navigate(['home/accounts']);
  }
}
