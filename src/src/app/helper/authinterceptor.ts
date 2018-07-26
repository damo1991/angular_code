import { Injectable } from '@angular/core'  
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { LocalStorageHelper } from './localStorageHelper';

@Injectable()  
export class HeaderInterceptor implements HttpInterceptor {  
    constructor(private _localStorage : LocalStorageHelper){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this._localStorage.getUserAuthenticationToken();
        if(token != undefined){
            const cloned = req.clone({
                headers : req.headers.set("Authorization","Bearer"+token)
            });
            return next.handle(cloned);
        }
        else{
            return next.handle(req);
        }
    }
}
