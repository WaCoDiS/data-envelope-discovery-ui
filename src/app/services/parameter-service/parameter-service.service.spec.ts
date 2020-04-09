import { TestBed } from '@angular/core/testing';

import { ParameterService } from './parameter-service.service';

describe('ParameterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParameterService = TestBed.get(ParameterService);
    expect(service).toBeTruthy();
  });
});
