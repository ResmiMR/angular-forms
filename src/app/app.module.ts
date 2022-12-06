import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegTempComponent } from './reg-temp/reg-temp.component';
import { RegReactiveComponent } from './reg-reactive/reg-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegTempComponent,
    RegReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule             
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
