import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmScheduleListComponent } from './film-schedule-list.component';

describe('FilmScheduleListComponent', () => {
  let component: FilmScheduleListComponent;
  let fixture: ComponentFixture<FilmScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
