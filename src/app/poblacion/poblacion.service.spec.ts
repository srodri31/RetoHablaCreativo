/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoblacionService } from './poblacion.service';

describe('PoblacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoblacionService]
    });
  });

  it('should ...', inject([PoblacionService], (service: PoblacionService) => {
    expect(service).toBeTruthy();
  }));
});
