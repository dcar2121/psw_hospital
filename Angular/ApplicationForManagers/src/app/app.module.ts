import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/homePage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PharmacyFeedbackComponent } from './pharmacyFeedback/pharmacyFeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PharmacyFeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'pharmacyFeedback', component: PharmacyFeedbackComponent },
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
