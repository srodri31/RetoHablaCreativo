import { Injectable } from '@angular/core';

@Injectable()
export class ArrayServicesService {

  constructor() { }

  sortArray( array: Array<any>, orderField: string, orderType: boolean ): Array<string> {
    array.sort( ( a: any, b: any ) => {
        let ae = a[ orderField ];
        let be = b[ orderField ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
        if ( ae == be ) return 0;
        if ( typeof ae == 'number' && typeof be == 'number'){
          return orderType ? (ae > be ? -1 : 1) : (be > ae ? -1 : 1);
        }
        if ( typeof ae == 'string' && typeof be == 'number'){
          var number = Number(ae);
          return orderType ? (number > be ? -1 : 1) : (be > number ? -1 : 1);
        }
        if ( typeof ae == 'number' && typeof be == 'string'){
          var number = Number(be);
          return orderType ? (ae > number ? -1 : 1) : (number > ae ? -1 : 1);
        }
        return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}
