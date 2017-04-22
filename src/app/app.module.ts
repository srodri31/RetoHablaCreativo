import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PoblacionModule } from './poblacion/poblacion.module';

import { AppComponent } from './app.component';

import { PoblacionService } from './poblacion/poblacion.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PoblacionModule
  ],
  providers: [
    PoblacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
