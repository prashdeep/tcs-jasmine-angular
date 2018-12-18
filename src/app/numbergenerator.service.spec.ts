import { TestBed, inject } from '@angular/core/testing';

import { NumbergeneratorService } from './numbergenerator.service';

describe('NumbergeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbergeneratorService]
    });
  });

  it('should be created', inject([NumbergeneratorService], (service: NumbergeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
