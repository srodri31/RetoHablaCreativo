import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PoblacionModule } from './poblacion/poblacion.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { PoblacionService } from './poblacion/poblacion.service';
import { ArrayServicesService } from './services/array-services.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PoblacionModule,
    ChartsModule
  ],
  providers: [
    PoblacionService,
    ArrayServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
