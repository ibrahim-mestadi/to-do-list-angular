import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabrComponent } from './components/navabr/navabr.component';
import { TasksComponent } from './components/tasks/tasks.component';


import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms' ;


@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
