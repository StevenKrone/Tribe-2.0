import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import {PersonService} from './_services/person.service';
import {TribeService} from './_services/tribe.service';
import {MessageService} from './_services/messages.service';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_services/in-memory-data.service';



import { AppComponent } from './app.component';
import { TribeslistComponent } from './_components/tribeslist/tribeslist.component';
import { TribedetailComponent } from './_components/tribedetail/tribedetail.component';
import { PersonslistComponent } from './_components/personslist/personslist.component';
import { PersonsdetailComponent } from './_components/personsdetail/personsdetail.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { LoginComponent } from './_components/login/login.component';
import { MessagingComponent } from './_components/messaging/messaging.component';


@NgModule({
  declarations: [
    AppComponent,
    TribeslistComponent,
    TribedetailComponent,
    PersonslistComponent,
    PersonsdetailComponent,
    DashboardComponent,
    LoginComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [PersonService, TribeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
