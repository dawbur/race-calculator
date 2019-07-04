import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAddedComponent } from './time-added.component';

describe('TimeAddedComponent', () => {
  let component: TimeAddedComponent;
  let fixture: ComponentFixture<TimeAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
