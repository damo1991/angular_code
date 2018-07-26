import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { LocalStorageService } from 'ng2-localstorage';
import { JsonHeader } from './helper/josnHeader';
import { LocalStorageHelper } from './helper/localStorageHelper';
import { LoginService } from './login/login.service';
import { DataService } from './showdata/data.service';
import { NavigationgaurdService } from './helper/navigationGaurd';
import { SingleDataService } from './singledata/singleData.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { SingledataComponent } from './singledata/singledata.component';

const router :  Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path : 'Login', component : LoginComponent},
  { path : 'ShowData', component : ShowdataComponent, canActivate:[NavigationgaurdService] },
  { path : 'ShowSingleData/:id', component : SingledataComponent, canActivate:[NavigationgaurdService] },
  { path: '**', redirectTo: 'Login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowdataComponent,
    SingledataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    LocalStorageService,
    LocalStorageHelper,
    JsonHeader,
    LoginService,
    DataService,
    NavigationgaurdService,
    SingleDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
