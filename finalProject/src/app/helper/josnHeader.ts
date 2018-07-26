import { RequestOptions, Headers } from '@angular/http'
import { Injectable } from '@angular/core';
import { LocalStorageHelper } from './localStorageHelper';

@Injectable()
export class JsonHeader{
    constructor(private _localStorage : LocalStorageHelper){

    }
    getHeader(){
        var header = new Headers();
        header.append('Access-Control-Allow-Origin', '*');
        header.append("Content-Type", "application/json");
        header.append("accept", "application/json");
        if(this._localStorage.getUserAuthenticationToken() != undefined){
            header.append('Authorization', 'Bearer ' + this._localStorage.getUserAuthenticationToken());
        }
        return new RequestOptions({ headers: header })
    }
}