import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageHelper } from './localStorageHelper';

@Injectable()
export class NavigationgaurdService {
  constructor(
    private _router: Router, 
    private _localStorageHelper: LocalStorageHelper
  ) { }

canActivate() {
    var userAuthorizationToken = this._localStorageHelper.getUserAuthenticationToken();
    if (userAuthorizationToken != undefined) {
        return true;
    }
    else {
        this._router.navigate(['/Login']);
        return true;
    }
}
}
