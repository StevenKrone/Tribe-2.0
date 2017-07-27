import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import {PersonService} from './_services/person.service';
import {TribeService} from './_services/tribe.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_services/in-memory-data.service';



import { AppComponent } from './app.component';
import { TribeslistComponent } from './tribeslist/tribeslist.component';
import { TribedetailComponent } from './tribedetail/tribedetail.component';
import { PersonslistComponent } from './personslist/personslist.component';
import { PersonsdetailComponent } from './personsdetail/personsdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TribeslistComponent,
    TribedetailComponent,
    PersonslistComponent,
    PersonsdetailComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [PersonService, TribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
