import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomepageLayoutComponent } from './homepage/homepage-layout/homepage-layout.component';
import { HomepageLayoutModule } from './homepage/homepage-layout/homepage-layout.module';

//import za LandingPageComponent - sam generise

@NgModule({
  declarations: [
    AppComponent,
    HomepageLayoutComponent,
    //LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    HomepageLayoutModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]

})
export class AppModule { }
