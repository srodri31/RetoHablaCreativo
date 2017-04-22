import { Component, OnInit } from '@angular/core';
import { PoblacionService } from './poblacion.service';

@Component({
  selector: 'poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css']
})
export class PoblacionComponent implements OnInit {

  poblacion = [];

  constructor(private poblacionService: PoblacionService) { }

  ngOnInit() {
    this.poblacionService.fetchData()
      .subscribe(data => {
        this.poblacion = data;
      });

  }

}
