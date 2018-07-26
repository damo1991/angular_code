import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import { JsonHeader } from '../helper/jsonheader';

@Injectable()
export class LoginService{
    constructor(
        private _http : Http,
        private _store : Store<any>,
        private _jsonHeader : JsonHeader
    ){}

    login(data) : Observable<any>{
        var header = this._jsonHeader.getHeader();
        let url = "https://reqres.in/api/login";
        let body = JSON.stringify(data);

       return this._http.post(url,body, header)
            .pipe(
                map((response : Response) => response.json()),
                catchError(this.handleError)
            )
    }

    addLoginToken(obj){
        this._store.dispatch({
            type : obj.action,
            payload : obj.payload
        })
    }

    handleError(error : Response): Observable<any>{
        return Observable.throw(error);
    }
}