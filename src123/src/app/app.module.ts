import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentsearchComponent } from './studentsearch/studentsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TemplatedrivenComponent,
    ReactiveformsComponent,
    StudentlistComponent,
    StudentsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [StudentlistComponent]
})
export class AppModule { }
