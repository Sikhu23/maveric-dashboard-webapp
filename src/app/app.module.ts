import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SignupComponent } from './pages/signup/signup.component';


import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,


    LoginComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
