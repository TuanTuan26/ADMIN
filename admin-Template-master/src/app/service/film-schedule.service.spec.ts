import { TestBed } from '@angular/core/testing';

import { FilmScheduleService } from './film-schedule.service';

describe('FilmScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmScheduleService = TestBed.get(FilmScheduleService);
    expect(service).toBeTruthy();
  });
});
