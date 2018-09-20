import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; //<-- This one 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
