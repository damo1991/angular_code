/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdressService } from './adress.service';

describe('AdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdressService]
    });
  });

  it('should ...', inject([AdressService], (service: AdressService) => {
    expect(service).toBeTruthy();
  }));
});
