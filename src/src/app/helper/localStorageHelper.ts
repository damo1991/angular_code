import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-localstorage/dist';

@Injectable()
export class LocalStorageHelper {
    date: Date;
    USER_AUTHORIZATION_TOKEN: string;
    constructor(
        private _localStorageService: LocalStorageService
    ) { }

    private setObjectValue(key: any, value: any) {
        this._localStorageService.set(key, JSON.stringify(value));
    }

    private getObjectValue(key: any) {
        var item = 'true';//<string>this._localStorageService.get(key);
        if (item)
            return JSON.parse(item);
        return null;
    }

    getUserAuthenticationToken() {
        return this._localStorageService.get(this.USER_AUTHORIZATION_TOKEN);
    }

    setUserAuthenticationToken(token:any) {
        this._localStorageService.set(this.USER_AUTHORIZATION_TOKEN, token);
    }
}