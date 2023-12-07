import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledEventsComponent } from './enrolled-events.component';

describe('EnrolledEventsComponent', () => {
  let component: EnrolledEventsComponent;
  let fixture: ComponentFixture<EnrolledEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolledEventsComponent]
    });
    fixture = TestBed.createComponent(EnrolledEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
