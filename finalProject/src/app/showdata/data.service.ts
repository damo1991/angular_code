import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { JsonHeader } from '../helper/josnHeader';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private _http: Http,
    private _jsonHeader: JsonHeader) {
  }

  getData(): Observable<any> {
    var header = this._jsonHeader.getHeader();
    let url = "https://jsonplaceholder.typicode.com/posts";

    return this._http.get(url, header)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  handleError(error: Response): Observable<any> {
    return Observable.throw(error);
  }
}
