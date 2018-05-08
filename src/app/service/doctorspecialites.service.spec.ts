import { TestBed, inject } from '@angular/core/testing';

import { DoctorspecialitesService } from './doctorspecialites.service';

describe('DoctorspecialitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorspecialitesService]
    });
  });

  it('should be created', inject([DoctorspecialitesService], (service: DoctorspecialitesService) => {
    expect(service).toBeTruthy();
  }));
});
