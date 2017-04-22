import { Component, OnInit } from '@angular/core';
import { PoblacionService } from './poblacion.service';
import { ArrayServicesService } from '../services/array-services.service';

@Component({
  selector: 'poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css']
})
export class PoblacionComponent implements OnInit {

  poblacion = [];
  sortDesc: boolean = false;

  constructor(private poblacionService: PoblacionService,
    private arrayServices: ArrayServicesService) { }

  ngOnInit() {
    this.poblacionService.fetchData()
      .subscribe(data => {
        this.poblacion = 
          this.arrayServices.sortArray(data, 'ComunaCorregimiento', this.sortDesc);
      });

  }

  sortPoblacion(orderField: string){
    this.sortDesc = !this.sortDesc;
    this.poblacion = 
    this.arrayServices.sortArray(this.poblacion, orderField, this.sortDesc);

  }

  

}
