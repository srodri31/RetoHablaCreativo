import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoblacionComponent } from './poblacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    PoblacionComponent
  ],
  declarations: [
    PoblacionComponent
  ]
})
export class PoblacionModule { }
