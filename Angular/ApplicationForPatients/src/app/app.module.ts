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
    HomepageLayoutModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]

})
export class AppModule { }
