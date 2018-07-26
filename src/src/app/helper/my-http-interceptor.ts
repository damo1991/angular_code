import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set("authorization", "Bearer fdgggRESgregsg778423gdsgsg687greg451fd3v1a3f47ew8f4dsf1dzs3f4as6fe") });
        console.log("Sending request with new header now ...");
        //send the newly created request
        return next.handle(authReq);
    }
}
