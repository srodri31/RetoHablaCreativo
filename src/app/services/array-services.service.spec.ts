/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrayServicesService } from './array-services.service';

describe('ArrayServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayServicesService]
    });
  });

  it('should ...', inject([ArrayServicesService], (service: ArrayServicesService) => {
    expect(service).toBeTruthy();
  }));
});
