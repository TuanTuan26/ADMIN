import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlSeatComponent } from './ql-seat.component';

describe('QlSeatComponent', () => {
  let component: QlSeatComponent;
  let fixture: ComponentFixture<QlSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
