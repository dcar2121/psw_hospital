import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
//import za LandingPageComponent - sam generise

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    //LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
