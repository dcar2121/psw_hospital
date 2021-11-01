import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule,
    HomepageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
