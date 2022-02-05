import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/app.reducers";
import {DashboardModule} from "./dashboard/dashboard.module";
import {HeroesModule} from "./heroes/heroes.module";
import {EffectsModule} from "@ngrx/effects";
import {HeroesEffects} from "./heroes/store/heroes.effects";
import {HeroesSearchModule} from "./hero-search/heroes-search.module";
import {HeroSearchEffects} from "./hero-search/store/hero-search.effects";
import { NotFound404Component } from './not-found404/not-found404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NotFound404Component
  ],
  imports: [
    HeroesSearchModule,
    DashboardModule,
    HeroesModule,
    MatSliderModule,
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) ,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([HeroesEffects,HeroSearchEffects]),
    StoreModule.forRoot(appReducers),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
