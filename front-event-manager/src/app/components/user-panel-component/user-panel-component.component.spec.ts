import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponentComponent } from './user-panel-component.component';

describe('UserPanelComponentComponent', () => {
  let component: UserPanelComponentComponent;
  let fixture: ComponentFixture<UserPanelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPanelComponentComponent]
    });
    fixture = TestBed.createComponent(UserPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
