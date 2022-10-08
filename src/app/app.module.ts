import { RouterModule } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SignupComponent } from './pages/signup/signup.component';


import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { NoopAnimationPlayer } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdeadetailsComponent } from './pages/ideadetails/ideadetails.component';



@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,


    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    IdeasComponent,
    IdeadetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    RouterModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
