import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlCinemaComponent } from './ql-cinema.component';

describe('QlCinemaComponent', () => {
  let component: QlCinemaComponent;
  let fixture: ComponentFixture<QlCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
