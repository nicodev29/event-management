import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventComponentComponent } from './current-event-component.component';

describe('CurrentEventComponentComponent', () => {
  let component: CurrentEventComponentComponent;
  let fixture: ComponentFixture<CurrentEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentEventComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
