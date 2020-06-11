import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlFilmComponent } from './ql-film.component';

describe('QlFilmComponent', () => {
  let component: QlFilmComponent;
  let fixture: ComponentFixture<QlFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
