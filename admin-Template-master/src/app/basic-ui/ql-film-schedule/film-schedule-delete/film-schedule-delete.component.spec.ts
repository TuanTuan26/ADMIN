import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmScheduleDeleteComponent } from './film-schedule-delete.component';

describe('FilmScheduleDeleteComponent', () => {
  let component: FilmScheduleDeleteComponent;
  let fixture: ComponentFixture<FilmScheduleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmScheduleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmScheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
