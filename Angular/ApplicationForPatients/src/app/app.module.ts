import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomepageLayoutComponent } from './homepage/homepage-layout/homepage-layout.component';
import { HomepageLayoutModule } from './homepage/homepage-layout/homepage-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageLayoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HomepageLayoutModule,
    LandingpageLayoutModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]

})
export class AppModule { } 