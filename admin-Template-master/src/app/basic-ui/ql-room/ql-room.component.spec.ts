import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlRoomComponent } from './ql-room.component';

describe('QlRoomComponent', () => {
  let component: QlRoomComponent;
  let fixture: ComponentFixture<QlRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
