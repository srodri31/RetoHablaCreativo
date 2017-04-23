import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoblacionComponent } from './poblacion.component';
import { OrderByPipe } from './order-by.pipe';
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    PoblacionComponent
  ],
  declarations: [
    PoblacionComponent,
    OrderByPipe,
    GraficaComponent
  ]
})
export class PoblacionModule { }
