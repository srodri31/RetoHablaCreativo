import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoblacionComponent } from './poblacion.component';
import { OrderByPipe } from './order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
