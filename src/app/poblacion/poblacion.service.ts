import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PoblacionService {

  constructor(private http: Http) {}

  fetchData(){
    return this.http.get('/assets/poblacion.json')
    .map(res => res.json());
  }

}
