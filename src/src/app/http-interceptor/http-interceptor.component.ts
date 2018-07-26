import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  method1call() {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

  method2call() {
    this._http.get('https://jsonplaceholder.typicode.com/user12').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

}
