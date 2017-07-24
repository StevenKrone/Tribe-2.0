/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TribeService } from './tribe.service';

describe('TribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TribeService]
    });
  });

  it('should ...', inject([TribeService], (service: TribeService) => {
    expect(service).toBeTruthy();
  }));
});
