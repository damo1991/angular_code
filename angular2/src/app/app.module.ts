import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentsearchComponent } from './studentsearch/studentsearch.component';
import { ReversePipe } from './reverse.pipe';
import { ApplystyleDirective } from './applystyle.directive';
import { AddressComponent } from './address/address.component';

import { AdressService } from './address/adress.service';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from 'ng2-localstorage';
import { LocalStorageHelper } from './helper/localStorage';
import { NavigationgaurdService }  from './helper/navigationGaurd';

import { Logger } from "angular2-logger/core"; 

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  //{ path: 'Home', component: AppComponent },
  { path : 'Login', component : LoginComponent },
  { path :'Reactive', component : ReactiveformsComponent, canActivate : [NavigationgaurdService] },
  { path : 'Template', component : TemplatedrivenComponent, canActivate : [NavigationgaurdService] },
  { path : 'StudentList', component : StudentlistComponent, canActivate : [NavigationgaurdService] },
  { path : 'Address', component : AddressComponent, canActivate : [NavigationgaurdService]  },
  { path: '**', redirectTo: 'Login' }
];


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TemplatedrivenComponent,
    ReactiveformsComponent,
    StudentlistComponent,
    StudentsearchComponent,
    ReversePipe,
    ApplystyleDirective,
    AddressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ Logger, AdressService, LocalStorageService, LocalStorageHelper, NavigationgaurdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
