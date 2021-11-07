import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageLayoutComponent } from './homepage/homepage-layout/homepage-layout.component';
import { HomepageLayoutModule } from './homepage/homepage-layout/homepage-layout.module';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';



@NgModule({
  declarations: [
    AppComponent,
    HomepageLayoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageLayoutModule,
    LandingpageLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
