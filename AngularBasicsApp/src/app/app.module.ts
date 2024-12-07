import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Angulardemo1Component } from './angulardemo.1/angulardemo.1.component';
import { CompOne } from './comp-one/comp-one.component';


@NgModule({
  declarations: [
    AppComponent,
   // Angulardemo1Component,
    CompOne
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
