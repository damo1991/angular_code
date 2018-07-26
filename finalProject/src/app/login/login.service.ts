import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { JsonHeader } from '../helper/josnHeader';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService{
    constructor(private _http : Http,
                private _jsonHeader : JsonHeader){
    }

    login(data) : Observable<any>{
        var header = this._jsonHeader.getHeader();
        console.log(header);
        let url = "https://reqres.in/api/login";
        let body = JSON.stringify(data);

       return this._http.post(url,body, header)
            .map((response : Response) => response.json())
            .catch(this.handleError)
    }

    handleError(error : Response): Observable<any>{
        return Observable.throw(error);
    }
}