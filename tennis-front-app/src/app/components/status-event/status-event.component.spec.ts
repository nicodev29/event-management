import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEventComponent } from './status-event.component';

describe('StatusEventComponent', () => {
  let component: StatusEventComponent;
  let fixture: ComponentFixture<StatusEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusEventComponent]
    });
    fixture = TestBed.createComponent(StatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
