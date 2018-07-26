import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Logger } from "angular2-logger/core";

@Injectable()
export class AdressService {

  constructor(private _http: Http,
              private _logger : Logger) { }

  getAddress(): Observable<any> {
    let options = this.getHeaderOptions();
    return this._http.get("https://jsonplaceholder.typicode.com/userss", options)
      .map((response : Response) => response.json())
      .catch(this.handleError);
  }

  validateUser(value): Observable<any> {
    let options = this.getHeaderOptions();
    let body = JSON.stringify(value);
    console.log(body)
    return this._http.post('https://pyservices.mannatech.com/api/Login', body, options)
      .map((response) => response.json());
  }

  handleError(error: any): Observable<any> {
    var errorMessage = JSON.parse(error._body).error_description;
    return Observable.throw(error);
  }

  getHeaderOptions(): RequestOptions {
    var header = new Headers();
    header.append('Access-Control-Allow-Origin', '*');
    header.append("Content-Type", "application/json");
    header.append("accept", "application/json");
    return new RequestOptions({ headers: header })
  }

}
