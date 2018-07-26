import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageService } from 'ng2-localstorage/dist';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { reducers } from './store/reducer';

import { NavigationgaurdService } from './helper/navigationGaurd';
import { HeaderInterceptor } from './helper/authinterceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './helper/my-http-interceptor';


import { UserService } from './services/user.service';
import { JsonHeader } from './helper/jsonheader';
import { LocalStorageHelper } from './helper/localStorageHelper';
import { LoginService } from './login/login.service';
import { DataService } from './showdatalist/data.service';
import { ShowdatalistComponent } from './showdatalist/showdatalist.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';

const router: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'DataList', component: ShowdatalistComponent},
  { path: 'HttpInterceptor', component: HttpInterceptorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowdatalistComponent,
    HttpInterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot(router)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  },
    UserService,
    LocalStorageService,
    LoginService,
    DataService,
    JsonHeader,
    LocalStorageHelper,
    NavigationgaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
