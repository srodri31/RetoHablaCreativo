import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoblacionComponent } from './poblacion.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    PoblacionComponent
  ],
  declarations: [
    PoblacionComponent,
    OrderByPipe
  ]
})
export class PoblacionModule { }
