import { TestBed } from '@angular/core/testing';

import { CampeonatoService } from './campeonato.service';

describe('CampeonatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampeonatoService = TestBed.get(CampeonatoService);
    expect(service).toBeTruthy();
  });
});
