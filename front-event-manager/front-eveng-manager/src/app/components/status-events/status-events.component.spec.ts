import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEventsComponent } from './status-events.component';

describe('StatusEventsComponent', () => {
  let component: StatusEventsComponent;
  let fixture: ComponentFixture<StatusEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
