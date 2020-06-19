import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmScheduleCreateComponent } from './film-schedule-create.component';

describe('FilmScheduleCreateComponent', () => {
  let component: FilmScheduleCreateComponent;
  let fixture: ComponentFixture<FilmScheduleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmScheduleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
