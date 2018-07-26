import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { JsonHeader } from '../helper/jsonheader';
import { map, catchError } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class DataService {
    constructor(private _http: Http,
        private _store : Store<any>,
        private _jsonHeader: JsonHeader) {
    }

    getData(): Observable<any> {
        //var header = this._jsonHeader.getHeader();
        //console.log(header);
        let url = "https://jsonplaceholder.typicode.com/posts";

        return this._http.get(url)
            .pipe(
                map((response: Response) => response.json()),
                catchError(this.handleError)
            )
    }

    handleError(error: Response): Observable<any> {
        return Observable.throw(error);
    }

    getLoginState(){
       return this._store.select('loginReducer');
    }
}

