import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventDialogComponentComponent } from './edit-event-dialog-component.component';

describe('EditEventDialogComponentComponent', () => {
  let component: EditEventDialogComponentComponent;
  let fixture: ComponentFixture<EditEventDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEventDialogComponentComponent]
    });
    fixture = TestBed.createComponent(EditEventDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
