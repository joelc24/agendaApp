import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';

function tokenGetter() {
  return localStorage.getItem('ACCESS_TOKEN')
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:7295']
      }
    }),
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
