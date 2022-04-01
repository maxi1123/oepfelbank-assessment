import { Injectable } from '@angular/core';

/* eslint-disable */

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root',
})
export default class LocalStorageRefService {
  get localStorage(): Storage {
    return getLocalStorage();
  }
}
