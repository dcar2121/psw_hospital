import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
=======
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
>>>>>>> develop

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/homePage.component';
import { PharmacyFeedbackComponent } from './pharmacyFeedback/pharmacyFeedback.component';
import { PharmacyFeedbackFormComponent } from './pharmacyFeedbackForm/pharmacyFeedbackForm.component';
import { PharmacyFeedbacksComponent } from './pharmacyFeedbacks/pharmacyFeedbacks.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PharmacyFeedbackComponent,
    SidebarComponent,
    PharmacyFeedbackFormComponent,
    PharmacyFeedbacksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'pharmacyFeedback', component: PharmacyFeedbackComponent },
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
=======
    HttpClientModule
>>>>>>> develop
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
