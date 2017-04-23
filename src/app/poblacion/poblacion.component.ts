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
  isAddingNewRecord: boolean = false;
  
  add1993pop: boolean = false;
  add2005pop: boolean = false;
  add2006pop: boolean = false;
  add2007pop: boolean = false;
  add2008pop: boolean = false;
  add2009pop: boolean = false;
  add2010pop: boolean = false;
  add2011pop: boolean = false;
  add2012pop: boolean = false;
  add2013pop: boolean = false;
  add2014pop: boolean = false;
  add2015pop: boolean = false;

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

  addNewData(data){
    this.poblacion.push(data);
    
    this.isAddingNewRecord = !this.isAddingNewRecord;
    this.add1993pop = false;
    this.add2005pop = false;
    this.add2006pop = false;
    this.add2007pop = false;
    this.add2008pop = false;
    this.add2009pop = false;
    this.add2010pop = false;
    this.add2011pop = false;
    this.add2012pop = false;
    this.add2013pop = false;
    this.add2014pop = false;
    this.add2015pop = false;

  }  

}
