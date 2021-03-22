/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GigService } from './gig.service';

describe('Service: Gig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GigService]
    });
  });

  it('should ...', inject([GigService], (service: GigService) => {
    expect(service).toBeTruthy();
  }));
});
